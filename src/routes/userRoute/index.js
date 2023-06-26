import { Router } from "express";
import { createUserHandler } from "./create.user";
import { getListUserHandler, getSingleUserHandler } from "./get.user";
import { updateUserHandler } from "./update.user";
import { deleteUserHandler } from "./delete.user";
import { authenticateOnlyMember, authenticateUser } from "../../middleware/authorization";
import { authenticateAdmin } from "../../middleware/adminAuth";
import { userLoginHandler } from "./login.user";
import { verifyUserHandler } from "./verify.user";
import { otpHandler } from "./send.otp";

const userRoute = Router();

userRoute.post('/create-user',createUserHandler);
userRoute.get('/single-user/:userId',authenticateUser,authenticateOnlyMember,getSingleUserHandler);
userRoute.get('/list-user',authenticateUser,authenticateOnlyMember,getListUserHandler);
userRoute.put('/update-user/:userId?',authenticateUser,updateUserHandler);
userRoute.delete('/delete-user/:userId?',authenticateUser,deleteUserHandler);
userRoute.get('/verify-user',verifyUserHandler);
userRoute.get('/send-otp',otpHandler);
userRoute.post('/login',userLoginHandler);
export default userRoute;