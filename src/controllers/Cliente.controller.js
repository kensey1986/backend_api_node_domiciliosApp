import Barrio from "../models/Barrio";
import Cliente from "../models/Cliente";

export const createCliente = async (req, res) => {
  try {
    const {
      name,
      email,
      nacimiento,
      documento,
      direccion,
      barrio,
      barrios,
      celular,
      fijo,
      apellido,
    } = req.body;

    // creating a new User

    const cliente = new Cliente({
      name,
      email,
      nacimiento,
      documento,
      direccion,
      barrio,
      barrios,
      celular,
      fijo,
      apellido,
    });
    // saving the new user
    const savedCliente = await cliente.save();

    return res.status(200).json({
      _id: savedCliente._id,
      name: savedCliente.name,
      email: savedCliente.email,
      nacimiento: savedCliente.nacimiento,
      documento: savedCliente.documento,
      direccion: savedCliente.direccion,
      barrio: savedCliente.barrio,
      barrios: savedCliente.barrios,
      celular: savedCliente.celular,
      fijo: savedCliente.fijo,
      email: savedCliente.email,
      apellido: savedCliente.apellido,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateClienteById = async (req, res) => {
  try {
    const updatedCliente = await Cliente.findByIdAndUpdate(
      req.params.clienteId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCliente);
  } catch (error) {
    console.error(error);
  }
};

export const getCliente = async (req, res) => {
  const clienteId = req.params.clienteId;
  const cliente = await Cliente.findOne({ _id: { $in: clienteId } }).populate("barrio");
  return res.json(cliente);
};

export const getClienteListDoc = async (req, res) => {
  const dato = req.params.dato;
  const cliente = await Cliente.find({ documento: { $regex: dato } }).populate("barrio");
  return res.json(cliente);
};



export const getClienteListCel = async (req, res) => {
  const dato = req.params.dato;
  const cliente = await Cliente.find({ celular: { $regex: dato } }).populate("barrio");
  return res.json(cliente);
};
export const getClienteListNom = async (req, res) => {
  const dato = req.params.dato;
  const cliente = await Cliente.find({ name: { $regex: dato } }).populate("barrio");
  return res.json(cliente);
};

export const getClientes = async (req, res) => {
  const clientes = await Cliente.find().populate("barrio");
  return res.json(clientes);
};
