import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import authRoutes from './src/routes/auth.route.js'
import messageRoutes from './src/routes/message.route.js'
import {connectDB }from './src/lib/db.js'
import{app, server} from './src/lib/socket.js'


import dns from "node:dns/promises";   
dns.setServers(["1.1.1.1", "1.0.0.1"]);
   
dotenv.config();



const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);



connectDB()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
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

