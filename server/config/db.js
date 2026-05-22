import mongoose from 'mongoose';

 const connectDB = async()=>{
    try{
        
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            autoIndex:false,
            serverSelectionTimeoutMS:5000,
        });
        console.log("mongodb connected successfully"); 
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
export default connectDB;