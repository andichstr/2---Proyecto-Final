import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {
    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }
    async listar(id) {
        try{
            const doc = this.collection.doc(`${id}`);
            const item = await doc.get();
            const response = item.data();
            return response;
        }catch(err){
            console.error(err);
        }
    }
    async listarAll() {
        try{
            const querySnapshot = await this.coleccion.get();
            return querySnapshot.docs;
        }catch(err){
            console.error(err);
        }
    }
    async guardar(nuevoElem) {
        try{
            const doc = this.collection.doc();
            await doc.create(nuevoElem);
        }catch(err){
            console.error(err);
        }
    }
    async actualizar(nuevoElem) {
        try{
            let id = nuevoElem.id;
            const doc = this.collection.doc(`${id}`);
            let item = await doc.update(nuevoElem);
            console.log("Elemento actualizado satisfactoriamente ", item);
        }catch(err){
            console.error(err);
        } 
    }
    async borrar(id) {
        try{
            const doc = this.collection.doc(`${id}`);
            const item = await doc.delete();
            console.log("Elemento eliminado satisfactoriamente ", item);
        }catch(err){
            console.error(err);
        }
        
    }
    async borrarAll() {
        const doc = this.collection.doc();
        const items = await doc.delete();
        console.log("Se han borrado todos los elementos de la BD", items)
    }
}

export default ContenedorFirebase