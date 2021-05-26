import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const sucursalSchema = new Schema(
  {
    
    
    name: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("Sucursal", sucursalSchema);
