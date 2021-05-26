import { Schema, model } from "mongoose";

const domicilioSchema = new Schema(
  {
    observacion: {
      type: String,
      required: true,
    },
    delivery: {
      type: Schema.Types.ObjectId,
      ref: "Delivery",
    },
    sucursal: {
      type: Schema.Types.ObjectId,
      ref: "Sucursal",
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "Cliente",
    },
    items: [
      {
        type: Object
      },
    ],
    direccion: {
      type: String,
      required: true,
    },
    estado: 
      {
        type: Schema.Types.ObjectId,
        ref: "Estado",
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("Domicilio", domicilioSchema);
