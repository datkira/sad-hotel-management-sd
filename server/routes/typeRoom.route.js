import express from "express";
import { Op } from "sequelize";
import typeRoomModel from "../providers/typeRoomModel.js";
const Router = express.Router();

Router.get('/',async (req,res)=>{

})

Router.post('/search/:name',async (req,res)=>{
    const name = req.params.name;
    try {
        const listTypeRooms = await typeRoomModel.findRoomByName(name);
        res.status(200).json(listTypeRooms);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
export default Router;

