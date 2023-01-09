import knex from 'knex'
import config from '../src/config.js'

// opciones SQL: mariaDb, sqlite3

crearTablasProductos(knex(config.sqlite3))
crearTablasCarritos(knex(config.sqlite3))

//------------------------------------------

async function crearTablasProductos(sqlClient) {
    try {
        sqlClient.schema.createTable('productos', table => {
            table.increments('id')
            table.string('nombre')
            table.integer('precio')
            table.string('url')
        })
        .then(() => console.log("table created"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            sqlClient.destroy();
        });
    
        console.log('Tabla productos creada con éxito')
    } catch (error) {
        console.log('Error al crear tabla productos')
        console.log(error)
    }
}

//------------------------------------------

async function crearTablasCarritos(sqlClient) {
    try {
        sqlClient.schema.createTable('carritos', table => {
            table.integer('id')
            table.integer('id_producto')
        })
        .then(() => console.log("table created"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            sqlClient.destroy();
        });
    
        console.log('Tabla productos creada con éxito')
    } catch (error) {
        console.log('Error al crear tabla productos')
        console.log(error)
    }
}