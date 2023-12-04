import { Router } from "express";
import auth from "../../middleware/authentication.js";
import { roles } from "../../middleware/authorizartion.js";
import * as requestController from './request.js'
const router = Router()


// get for admin
router.get(
  '/getRequist',
  // Admin
  requestController.getRequestForAdmin()
)

// get for user 
router.get(
  '/getRequist/:id',
  // User
  requestController.getRequestForUser()
)

// send 
router.post(
  "/sendRequests",
  // authorize
);

// accept 
router.patch(
  "/acceptRequests/:id",
  // admin,
  requestController.acceptRequset()
)

// ignore 
router.patch(
  "/ignoreRequests/:id",
  //admin
  requestController.igonreRequest()
)

// delete 
router.delete(
  "/deleteRequests/:id",
  // admin
  requestController.deleteRequet()
);

export default router
