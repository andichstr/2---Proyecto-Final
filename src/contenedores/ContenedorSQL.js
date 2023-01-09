import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }

    async listar(id) {
        this.knex.select('*').from(this.tabla).where('id', id)
        .then((rows) => {
            return rows;
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }

    async listarAll(criterio = {}) {
        this.knex.select('*').from(this.tabla)
        .then((rows) => {
            return rows;
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }

    async guardar(elem) {
        this.knex.insert(elem).into(this.tabla)
        .then((rows) => {
            return rows;
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }

    async actualizar(elem) {
        this.knex(this.tabla).update(elem).where('id', id)
        .then((rows) => {
            return rows;
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }

    async borrar(id) {
        this.knex(this.tabla).where('id', id).del()
        .then(() => {
            console.log(`El elemento con id: ${id} fue borrado exitosamente`)
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }

    async borrarAll(criterio = {}) {
        this.knex(this.tabla).del()
        .then(() => {
            console.log(`Se borraron todos los elementos de la tabla ${this.tabla}`)
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
        .finally(() => {
            this.knex.destroy();
        })
    }
}

export default ContenedorSQL