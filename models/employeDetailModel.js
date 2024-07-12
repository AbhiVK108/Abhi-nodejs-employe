const mongoose = require("mongoose")

const employeDetails = new mongoose.Schema(
    {
        empID:{
            type:String,
            required:true
        },
        fullname:{
            type:String,

        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,

        },
        aadhar:{
            type:String
        },
        jobtype:{
            parttime:{
                type:String
            },
            fulltime:{
                type:String
            }
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("employe",employeDetails);