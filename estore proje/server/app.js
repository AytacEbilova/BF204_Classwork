const express = require('express')
const app = express()
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose = require('mongoose')
require("dotenv").config();
const PORT=process.env.PORT || 3000;
const DB_URL=process.env.DB_URL
const { Schema } = mongoose;

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://bd89u19l1:aytac123@cluster0.kzbvr0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => app.listen(PORT, () => {
    console.log(`Example app listening on port:http://localhost:${PORT}`)
  }));

  const productSchema = new Schema({
    img:{type:String,require:true}, 
    title:{type:String,require:true}, 
    price:{type:String,require:true}, 
   
  });
  const Product = mongoose.model('Product', productSchema);
  app.get("/products",async(req,res)=>{
    try {
        const products= await Product.find({});
        if (products.length>0) {
            res.status(200).send({
                message:"success",
                data:products
            })
        } else {
            res.status(204).send({
                message:"empty data",
                data:null
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
  })

  app.get("/products/:id/",async(req,res)=>{
    const {id}=req.params;
    try {
        const oneProduct=await Product.findById(id);
        res.status(200).send({
            message:"success",
            data:oneProduct
        })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
  })

  app.delete("/products/:id/",async(req,res)=>{
    const{id}=req.params;
    try {
        const deleteProduct=await Product.findByIdAndDelete(id);
        res.send({
            message:"deleted",
            deleteProduct:deleteProduct
        })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
  })

  app.post("/products",async(req,res)=>{
    const newProduct=new Product(req.body);
    console.log(newProduct)
    try {
        await newProduct.save();
        res.status(200).send({
            message:"posted",
            newProduct:newProduct
        })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
 
  })