

import { Schema, model } from "mongoose";

export const ESTADOS = ["Recibido", "Preparacion", "Entrega", "Entregado"];

const estadoSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Estado", estadoSchema);
