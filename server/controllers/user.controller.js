import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import genToken from "../config/token.js";

export const signup = async (req, res) => {
    try {
        const { name, userName, email, password } = req.body;
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (userName.length < 3 || userName.length > 20) {
            return res.status(400).json({ message: "Username must be between 3 and 20 characters long" });
        }
        if (name.length < 3 || name.length > 50) {
            return res.status(400).json({ message: "Name must be between 3 and 50 characters long" });
        }
        // Check if user already exists

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });

        }
        // password hashed
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = await User.create({
            name,
            userName,
            email,
            password: hashedPassword,
        });

// generate token
        const token = await genToken(newUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            userName: newUser.userName,
            email: newUser.email,
        };


         return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse,
        });


        
    }
    catch (err) {
        console.error(`Signup error: ${err.message}`);
        return res.status(500).json({ success: false, message: `Signup error` });
    }
}

//Login controller

export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email ||!password){
            return res.status(400).json({success:false,message:"All fields are required"});
        }
        if(!/\S+@\S+\.\S+/.test(email)){
            return res.status(400).json({message:"Invalid email format"});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters long"});
        }

        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid email or password"});
        }
        const isMatch=await bcryptjs.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({success:false,message:"Incorrect password"});
        }
        const token=await genToken(user._id);

        const userResponse={
            _id:user._id,
            name:user.name,
            userName:user.userName,
            email:user.email,
        };
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000, // 7 days
        });
        return res.status(200).json({
            success:true,
            message:"Login successful",
            user:userResponse,
        });


    }catch(error){
        console.error(`Login error: ${error.message}`);
        return res.status(500).json({ success: false, message: `Login error` });
    }

}

//Logout controller

export const logout=async(req,res)=>{
    try{
        res.clearCookie("token",{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production", 
            sameSite:"strict",
        });
        return res.status(200).json({success:true,message:"Logout successful"});



    }catch(error){
        console.error(`Logout error: ${error.message}`);
        return res.status(500).json({ success: false, message: `Logout error` });

    }
}