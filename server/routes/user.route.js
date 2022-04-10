import express from 'express'
import sequelize from '../utils/database.js';
const Router = express.Router();
import initModels from '../models/init-models.js'
const models = initModels(sequelize);
Router.get('/',async (req,res)=>{
    const hoadon = await models.hoadon.findAll();
    res.json(hoadon);
})


export default Router;