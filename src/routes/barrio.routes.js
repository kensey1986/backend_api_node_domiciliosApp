import { Router } from "express";
const router = Router();

import * as barrioCtrl from "../controllers/barrio.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    //verifySignup.checkDuplicateDeliveryUsername,
  ],
  barrioCtrl.createBarrio
);
router.get("/", authJwt.verifyToken, barrioCtrl.getBarrios);

router.get("/:barrioId", authJwt.verifyToken, barrioCtrl.getBarrio);

router.put(
  "/:barrioId",
  [authJwt.verifyToken, authJwt.isAdmin],
  barrioCtrl.updateBarrioById
);

export default router;
