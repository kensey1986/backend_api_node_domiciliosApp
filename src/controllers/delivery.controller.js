import Delivery from "../models/Delivery";

export const createDelivery = async (req, res) => {
  try {
    const {
      username,
      name,
      email,
      password,
      sucursal,
      nacimiento,
      documento,
      direccion,
      barrio,
      celular,
      fijo,
    } = req.body;
    // creating a new User

    const delivery = new Delivery({
      username,
      name,
      email,
      password,
      sucursal,
      nacimiento,
      documento,
      direccion,
      barrio,
      celular,
      fijo,
    });
    // encrypting password
    delivery.password = await Delivery.encryptPassword(delivery.password);

    // saving the new user
    const savedDelivery = await delivery.save();

    return res.status(200).json({
      _id: savedDelivery._id,
      username: savedDelivery.username,
      sucursal: savedDelivery.sucursal,
      name: savedDelivery.name,
      email: savedDelivery.email,
      password: savedDelivery.password,
      nacimiento: savedDelivery.nacimiento,
      documento: savedDelivery.documento,
      direccion: savedDelivery.direccion,
      barrio: savedDelivery.barrio,
      celular: savedDelivery.celular,
      fijo: savedDelivery.fijo,
      email: savedDelivery.email,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateDeliveryById = async (req, res) => {
  try {
    const { password } = req.body;
    console.log(password);
    if (password !== undefined) {
      req.body.password = await Delivery.encryptPassword(password);
    }
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.deliveryId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDelivery);
  } catch (error) {
    console.error(error);
  }
};
export const getDeliverysBySucursal = async (req, res) => {
  const sucursalId = req.params.sucursalId;
  // const rolesFound = await Role.find({ name: { $in: roles } });
  const delivery = await Delivery.find({ sucursal: { $in: sucursalId } });
  return res.json(delivery);
};

export const getDelivery = async (req, res) => {
  const deliveryId = req.params.deliveryId;
  // const rolesFound = await Role.find({ name: { $in: roles } });
  const delivery = await Delivery.findOne({ _id: { $in: deliveryId } });
  return res.json(delivery);
};

export const getDeliverys = async (req, res) => {
  const delivery = await Delivery.find().populate("sucursal");
  return res.json(delivery);
};
