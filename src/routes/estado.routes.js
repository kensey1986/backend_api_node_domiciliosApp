import { Router } from "express";
const router = Router();

 import * as estadoCtrl from "../controllers/estado.controller";
 import { authJwt, verifySignup } from "../middlewares";
 router.post(
   "/",
   [
     authJwt.verifyToken,
     authJwt.isAdmin,
     //verifySignup.checkDuplicateDeliveryUsername,
   ],
   estadoCtrl.createEstado
 );
 router.get("/", authJwt.verifyToken, estadoCtrl.getEstados);
 router.get("/:barrioId", authJwt.verifyToken, estadoCtrl.getEstado);
 router.put(
   "/:barrioId",
   [authJwt.verifyToken, authJwt.isAdmin],
   estadoCtrl.updateEstadoById
 );

export default router;
