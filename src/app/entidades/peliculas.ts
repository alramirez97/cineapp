import { Schema } from "mongoose";


export interface peliculas {
    _id?: string;
    titulo: String;
   duracion: String;
   clasificacion: String;
   genero: String;
   imagen: String;
   estatus:String;
   fechaEstreno:String;
   detalle_id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Detalles',
    }],
}
/*
 titulo: String;
   duracion: String;
   clasificacion: String;
   genero: String;
   imagen: String;
   estatus:String='Activa';
   fechaEstreno:String;

*/