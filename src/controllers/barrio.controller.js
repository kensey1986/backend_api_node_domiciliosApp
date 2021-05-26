import Barrio from "../models/Barrio";

export const createBarrio = async (req, res) => {
  try {
    const {
     
      name,
     
    } = req.body;
    // creating a new User

    const barrio = new Barrio({
      name,
    });
   
    // saving the new user
    const savedBarrio = await barrio.save();

    return res.status(200).json({
      _id: savedBarrio._id,
     
      name: savedBarrio.name,
      
     
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateBarrioById = async (req, res) => {
  try {
    
    const updatedBarrio= await Barrio.findByIdAndUpdate(
      req.params.barrioId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedBarrio);
  } catch (error) {
    console.error(error);
  }
};
// export const getBarriosBySucursal = async (req, res) => {
//   const sucursalId = req.params.sucursalId;
//   // const rolesFound = await Role.find({ name: { $in: roles } });
//   const delivery = await Delivery.find({ sucursal: { $in: sucursalId } });
//   return res.json(delivery);
// };

export const getBarrio = async (req, res) => {
  const barrioId = req.params.barrioId;
  // const rolesFound = await Role.find({ name: { $in: roles } });
  const barrio = await Barrio.findOne({ _id: { $in: barrioId } });
  return res.json(barrio);
};

export const getBarrios = async (req, res) => {
  const barrio = await Barrio.find();
  return res.json(barrio);
};
