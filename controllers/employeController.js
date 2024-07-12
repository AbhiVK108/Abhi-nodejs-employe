const employesModel = require('../models/employeDetailModel')

exports.registerEmploye = async(req, res)=>{
    try{
        const employe = new employesModel(req.body);
        await employe.save();
        res.status(201).json(employe);
    }catch(e){
        res.status(500).json({e:"failed to register employee"});
        console.log(e);
    }
    
};
exports.getEmploye = async(req, res)=>{
    try{
        const employeList = await employesModel.find();
       res.status(200).json(employeList);
    }catch(e){
        res.status(500).json({e:"failed to get employee"});
        console.log(e);
    }
}