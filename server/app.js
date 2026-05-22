import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import connectDB from './config/db.js'

import dns from "node:dns/promises";   
dns.setServers(["1.1.1.1", "1.0.0.1"]);
   
dotenv.config();
const app = express();

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use('/api/users', userRouter);
//app.use('/api/messages', messageRouter);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is running on 3000`);
        })
    })
    .catch((err)=>{
            console.log(`monodb connection failed`);
    })

    app.use('/', (err,eq, res,next) => {
        if(err){
            console.error(err.stack);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(404).json({ message: 'Not Found' });
        }
    });

