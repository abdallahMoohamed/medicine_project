import { Router } from "express";
import auth from "../../middleware/authentication.js";
import { roles } from "../../middleware/authorizartion.js";
import * as requestController from './request.js'
const router = Router()


// send 
router.post(
  "/sendRequests",
  // authorize
  requestController.sendRequest
);

// accept 
router.patch(
  "/acceptRequests/:id",
  // admin,
  requestController.acceptRequset
)

// ignore 
router.patch(
  "/ignoreRequests/:id",
  //admin
  requestController.igonreRequest
)

// delete 
router.delete(
  "/deleteRequests/:id",
  // admin
  requestController.deleteRequet
);

// history for admin
router.get(
  '/getRequist',
  // Admin
  requestController.getRequestForAdmin
)

// history for user
router.get(
  '/getRequist/:id',
  // User
  requestController.getRequestForUser
)

export default router
