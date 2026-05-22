import express from 'express'
import { signup, login, logout } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
//router.put("/update-profile", isAuthenticated, updateProfile);
//router.get("/check", isAuthenticated, isAuth);

export default userRouter;
