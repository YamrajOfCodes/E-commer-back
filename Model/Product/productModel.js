const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{
        type:String
    },
    productname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }, 
     description:{
        type:String,
        required:true
    }, 
     category:{
        type:String,
        required:true
    }, 
     image:{
        type:String,
        required:true
    },
})

const productModel = mongoose.model("productmodel",productSchema);
module.exports = productModel;