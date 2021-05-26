import { Schema, model } from "mongoose";


const barrioSchema = new Schema(
  {
    name: {
      type: String,
    },
    comuna: {
      type: String,
    },
    estrato: {
      type: String,
    },
    

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Barrio", barrioSchema);
