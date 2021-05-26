import axios from "axios";
import Domicilio from "../models/Domicilio";
import Estado from "../models/Estado";

export const createDomicilio = async (req, res) => {

  try {
    const { observacion, delivery, sucursal, cliente, items, direccion, estado } = req.body;
   
   const estadoFound = await Estado.findOne({ name: { $in: estado } });
   const estadoNuevo=estadoFound._id;

    const domicilio = new Domicilio({
      observacion,
      delivery,
      sucursal,
      cliente,
      items, 
      direccion,
      estado: estadoNuevo,
    });

    const savedDomicilio = await domicilio.save();

    return res.status(200).json({
      _id: savedDomicilio._id,
      observacion: savedDomicilio.observacion,
      delivery: savedDomicilio.delivery,
      Sucursal: savedDomicilio.sucursal,
      Cliente: savedDomicilio.cliente,
      items: savedDomicilio.items,
      direccion:  savedDomicilio.direccion,
      estado: savedDomicilio.estado
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDomicilios = async (req, res) => {
  const domicilio = await Domicilio.find()
    .populate("sucursal")
    .populate("delivery")
    .populate("estado")
    .populate("cliente");
  return res.json(domicilio);
};

export const updateDomicilioById = async (req, res) => {
  try {
    const updatedDomicilio = await Domicilio.findByIdAndUpdate(
      req.params.domicilioId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDomicilio);
  } catch (error) {
    console.error(error);
  }
};

export const updateDomicilioByEstado = async (req, res) => {
  
  try {
    const updatedDomicilio = await Domicilio.findByIdAndUpdate(
      req.params.domicilioId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDomicilio);
  } catch (error) {
    console.error(error);
  }
};

//export const getUser = async (req, res) => {};
