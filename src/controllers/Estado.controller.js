import Estado from "../models/Estado";

export const createEstado = async (req, res) => {
  try {
    const {
      name,
    } = req.body;
    // creating a new User
    const estado = new Estado({
      name,
    });
    // saving the new user
    const savedEstado = await estado.save();
    return res.status(200).json({
      _id: savedEstado._id,
      name: savedEstado.name,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateEstadoById = async (req, res) => {
  try {
    const updatedEstado = await Cliente.findByIdAndUpdate(
      req.params.estadoId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedEstado);
  } catch (error) {
    console.error(error);
  }
};

export const getEstado = async (req, res) => {
  const estadoId = req.params.estadoId;
  const estado = await Estado.findOne({ _id: { $in: estadoId } });
  return res.json(estado);
};



export const getEstados = async (req, res) => {
  const estados = await Estado.find();
  return res.json(estados);
};
