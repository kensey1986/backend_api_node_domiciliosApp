import { Router } from "express";
const router = Router();

import * as direccionCtrl from "../controllers/direccion.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    //verifySignup.checkDuplicateDeliveryUsername,
  ],
  direccionCtrl.createDireccion
);
router.get("/", authJwt.verifyToken, direccionCtrl.getDirecciones);

router.put(
  "/:direccionId",
  [authJwt.verifyToken, authJwt.isAdmin],
  direccionCtrl.updateDireccionById
);

export default router;
