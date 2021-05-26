import Direccion from "../models/Direccion";

export const createDireccion = async (req, res) => {
  try {
    const {
      name,
    } = req.body;
    // creating a new User

    const direccion = new Direccion({
      name,
    });
   
    // saving the new user
    const savedDireccion = await direccion.save();

    return res.status(200).json({
      _id: savedDireccion._id,
      name: savedDireccion.name,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateDireccionById = async (req, res) => {
  try {
    
    const updatedDireccion= await Direccion.findByIdAndUpdate(
      req.params.direccionId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDireccion);
  } catch (error) {
    console.error(error);
  }
};


export const getDireccion = async (req, res) => {
  const direccionId = req.params.direccionId;
  // const rolesFound = await Role.find({ name: { $in: roles } });
  const direccion = await Direccion.findOne({ _id: { $in: direccionId } });
  return res.json(direccion);
};

export const getDirecciones = async (req, res) => {
  const direccion = await Direccion.find();
  return res.json(direccion);
};
