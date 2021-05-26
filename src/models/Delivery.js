import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const deliverySchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },

    name: {
      type: String,
    },

    documento: {
      type: String,
    },

    direccion: {
      type: Schema.Types.ObjectId,
      ref: "Direccion",
    },

    barrio: {
      type: Schema.Types.ObjectId,
      ref: "Barrio",
    },

    nacimiento: {
      type: Date,
    },

    fijo: {
      type: String,
    },

    celular: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },
    
    sucursal: {
      type: Schema.Types.ObjectId,
      ref: "Sucursal",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

deliverySchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

deliverySchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("Delivery", deliverySchema);
