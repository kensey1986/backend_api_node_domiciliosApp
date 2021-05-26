import { Router } from "express";
const router = Router();

import * as domicilioCtrl from "../controllers/domicilio.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  domicilioCtrl.createDomicilio
);

router.get("/", authJwt.verifyToken, domicilioCtrl.getDomicilios);

router.put(
  "/:domicilioId",
  [authJwt.verifyToken, authJwt.isAdmin],
  domicilioCtrl.updateDomicilioById
);

 router.put(
   "/estado/:domicilioId",
   [authJwt.verifyToken, authJwt.isAdmin],
   domicilioCtrl.updateDomicilioByEstado
 );

export default router;
