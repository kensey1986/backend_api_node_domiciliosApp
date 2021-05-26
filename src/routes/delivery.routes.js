import { Router } from "express";
const router = Router();

import * as deliveryCtrl from "../controllers/delivery.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateDeliveryUsername,
  ],
  deliveryCtrl.createDelivery
);
router.get("/", authJwt.verifyToken,deliveryCtrl.getDeliverys);

router.get("/list/:sucursalId", authJwt.verifyToken, deliveryCtrl.getDeliverysBySucursal);


router.put(
  "/:deliveryId",
  [authJwt.verifyToken, authJwt.isAdmin],
  deliveryCtrl.updateDeliveryById
);

export default router;
