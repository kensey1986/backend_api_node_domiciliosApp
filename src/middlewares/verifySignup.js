import User from "../models/User";
import Delivery from "../models/Delivery";
import { ROLES } from "../models/Role";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.status(400).json({ message: "The user already exists" });
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkDuplicateDeliveryUsername= async (req, res, next) => {
  try {
    const delivery = await Delivery.findOne({ username: req.body.username });
    if (delivery)
      return res.status(202).json({ message: `Nick "${req.body.username}", ya se encuentra en uso` });
    next();
  } catch (error) {
     res.status(500).json({ message: error });
  }
};

const checkDuplicateSucursalName= async (req, res, next) => {
  try {
    const name = await Delivery.findOne({ username: req.body.name });
    if (name)
      return res.status(202).json({ message: `Nombre "${req.body.username}", ya se encuentra en uso` });
    next();
  } catch (error) {
     res.status(500).json({ message: error });
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

export { checkDuplicateUsernameOrEmail, checkRolesExisted, checkDuplicateDeliveryUsername, checkDuplicateSucursalName };
