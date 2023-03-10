import express from 'express'
const { Router } = express

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
    res.json({productos: productosApi.listarAll()});
})

productosRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const producto = productosApi.listar(parseInt(id));
    res.json(producto);
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    const producto = req.body;
    const id = productosApi.guardar(producto);
    res.send(`Se guardo el producto con el id: ${id}.`);
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    const producto = req.body;
    const response = productosApi.actualizar(producto);
    res.send(response);
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    const id = req.params.id;
    const response = productosApi.borrar(id);
    res.send(response);
})

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/', async (req, res) => {
    const response = carritosApi.listarAll();
    res.send(response);
})

carritosRouter.post('/', async (req, res) => {
    const response = carritosApi.guardar();
    res.send(response);
})

carritosRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const response = carritosApi.borrar(parseInt(id));
    res.send(response);
})

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const response = carritosApi.listar(id);
    res.send(response);
})

carritosRouter.post('/:id/productos', async (req, res) => {
    const carrito = req.body;
    const response = carritosApi.actualizarProductos(carrito);
    res.send(response);
})

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const id = req.params.idProd;
    const response = carritosApi.borrarProducto(id);
    res.send(response);

})

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app