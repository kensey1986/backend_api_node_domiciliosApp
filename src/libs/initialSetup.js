import Role from "../models/Role";
import User from "../models/User";
import Barrio from "../models/Barrio";

import bcrypt from "bcryptjs";
import Estado from "../models/Estado";

export const createParamsInitials = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;
     // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
      // new Barrio({ name: "Estandar", comuna: "comuna 0", estrato: "0" }).save(),
      // new Barrio({ name: "Estandar2", comuna: "comuna 0", estrato: "0" }).save(),
      new Estado({ name: "Ingresado" }).save(),
      new Estado({ name: "Alistamiento" }).save(),
      new Estado({ name: "Enviado" }).save(),
      new Estado({ name: "Entregado" }).save(),

    ]);

    const roles = await Role.find({ name: { $in: ["admin", "user", "moderator",] } });

    const savedUser = await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });

    console.log(savedUser)
    console.log('Admin User Created!')

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};


