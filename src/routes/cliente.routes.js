import { Router } from "express";
const router = Router();

import * as clienteCtrl from "../controllers/cliente.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  clienteCtrl.createCliente
);

router.get("/", authJwt.verifyToken, clienteCtrl.getClientes);

router.get("/:clienteId", authJwt.verifyToken, clienteCtrl.getCliente);

router.get("/filtrardoc/:dato", [authJwt.verifyToken], clienteCtrl.getClienteListDoc);

router.get("/filtrarcel/:dato", [authJwt.verifyToken], clienteCtrl.getClienteListCel);

router.get("/filtrarnom/:dato", [authJwt.verifyToken], clienteCtrl.getClienteListNom);

router.put(
  "/:clienteId",
  [authJwt.verifyToken, authJwt.isAdmin],
  clienteCtrl.updateClienteById
);

export default router;
