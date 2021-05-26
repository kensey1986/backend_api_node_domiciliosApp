import { Schema, model } from "mongoose";


const direccionSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Direccion", direccionSchema);
