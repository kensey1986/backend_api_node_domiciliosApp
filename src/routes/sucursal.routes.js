import { Router } from "express";
const router = Router();

import * as sucursalCtrl from "../controllers/sucursal.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    //verifySignup.checkDuplicateDeliveryUsername,
  ],
  sucursalCtrl.createSucursal
);
router.get("/", authJwt.verifyToken,sucursalCtrl.getSucursales);

router.put(
  "/:sucursalId",
  [authJwt.verifyToken, authJwt.isAdmin],
  sucursalCtrl.updateSucursalById
);

export default router;
