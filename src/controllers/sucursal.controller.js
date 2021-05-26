import Sucursal from "../models/Sucursal";


export const createSucursal = async (req, res) => {
  
  try {
    const {  name, direccion } = req.body;
    // creating a new User
    const sucursal = new Sucursal({
      name,
      direccion,
    });
   

    // saving the new user
    const savedSucursal = await sucursal.save();

    return res.status(200).json({
      _id: savedSucursal._id,
      name: savedSucursal.name,
      
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateSucursalById = async (req, res) => {
  try {
    const updatedSucursal = await Sucursal.findByIdAndUpdate(
      req.params.sucursalId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedSucursal);
  } catch (error) {
    console.error(error);
  }
   
};

export const getSucursal = async (req, res) => {};

export const getSucursales = async (req, res) => {
  const sucursal = await Sucursal.find();
  return res.json(sucursal);
};
