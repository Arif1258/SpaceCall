import express, { urlencoded } from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import {connectToSocket} from "./controller/socketManager.js";
import userRoutes from "./routes/user.routes.js";


const app=express();
const server=createServer(app);
app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);


const start=async ()=>{
    app.set("mongo_user")
        const connectionDb=mongoose.connect("mongodb+srv://arifahmedma490:12588@zoomcluster.s0rgfo0.mongodb.net/")
        console.log("database connected");
        server.listen(app.get("port"),()=>{
            console.log("server is running on port 8000")
    })
}
start();