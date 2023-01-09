import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {
    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        return this.coleccion.findById(id);
    }

    async listarAll() {
        return this.coleccion.find({});
    }

    async guardar(nuevoElem) {
        this.coleccion.create(nuevoElem, function(err, elem) {
            if(err) return err;
            return elem;
        })
    }

    async actualizar(nuevoElem) {
        await this.coleccion.replaceOne(nuevoElem);
        return "Elemento actualizado";
    }

    async borrar(id) {
        this.coleccion.findByIdAndDelete(id);
    }

    async borrarAll() {
        this.collection.deleteMany({});
    }
}

export default ContenedorMongoDb