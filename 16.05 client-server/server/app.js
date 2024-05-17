const express = require('express')
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose  = require('mongoose');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const DB=process.env.DB_URL
const PORT=process.env.PORT || 3000

mongoose.connect("mongodb+srv://bd89u19l1:aytac123@cluster0.hjirday.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log('connected')
    app.listen(PORT, () => {
        console.log(`Example app listening on port:http://localhost${PORT}`)
      })
  })

  const MenuSchema = new mongoose.Schema({
    src:{type:String,require:true},
    title:{type:String,require:true},
    bio:{type:String,require:true},
    price:{type:String,require:true},
    category:{type:String,require:true}
  });
  const Menu=mongoose.model('Menu',MenuSchema)
  app.get("/menu",async(req,res)=>{
    try {
        const menu=await Menu.find({});
        if(menu.length>0){
            res.status(200).send({
                message:'success',
                data:menu
            })
        }
        else{
            res.status(204).send({
                message:'data empty',
                data:null
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
  })

  app.delete("/menu/:id/",async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedMenu=await Menu.findByIdAndDelete(id)
        res.send({
            message:'deleted',
            deletedMenu:deletedMenu
        })
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
  })

  app.post('/menu',async(req,res)=>{
    const newMenu=new Menu(req.body);
    try {
        await newMenu.save();
        res.send({
            message:'posted',
            data:newMenu,
        })
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
 
  })
  

