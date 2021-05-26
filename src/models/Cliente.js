import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    name: {
      type: String,
    },

    documento: {
      type: String,
    },

    direccion: {
      type: String,
    },

    barrio:  {
        type: Schema.Types.ObjectId,
        ref: "Barrio",
      },
    
      barrios: [
        {
          type: Object
        },
      ],
    nacimiento: {
      type: Date,
    },

    celular: {
      type: String,
    },
    telefono: {
      type: String,
    },

    email: {
      type: String,
    },
    
    

  },
  {
    timestamps: true,
    versionKey: false,
  }
);



export default model("Cliente", clienteSchema);
