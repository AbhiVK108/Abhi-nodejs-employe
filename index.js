const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/employeRoutes")

const app = express();
app.use(express.json());

port = 6000;

app.listen(port,()=>{
    console.log("Port Is Working...",port)
});

const mongoDBUrl = "mongodb://localhost:27017/vitatechinfo";

mongoose.connect(mongoDBUrl).then(()=>{
    console.log("MongoDB IS Conected")
}).catch((error)=>{
    console.log("Error Unable To Connect",error)
});

app.use("/employe",routes);