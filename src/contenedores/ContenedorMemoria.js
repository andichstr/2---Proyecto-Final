class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    listar(id) {
        return this.elementos[id];
    }

    listarAll() {
        return this.elementos;
    }

    guardar(elem) {
        this.elementos.push(elem);
    }

    actualizar(elem) {
        const index = this.elementos.findIndex(element => element.id == elem.id);
        if (this.elementos[index]) {
            this.elementos[index] = elem;
            return `Elemento con id: ${elem.id} fue editado correctamente.`;
        }
        return 'Elemento no encontrado.';
    }

    borrar(id) {
        const index = this.elementos.findIndex(element => element.id === id);
        if(this.elementos[index]){
            this.elementos.splice(index, 1);
            return `Elemento con id: ${id} fue borrado correctamente.`
        }
        return 'Elemento no encontrado.';
    }

    borrarAll() {
        this.elementos = [];
        return 'Elementos borrados exitosamente.';
    }
}

export default ContenedorMemoria