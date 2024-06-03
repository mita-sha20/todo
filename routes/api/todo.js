const express = require("express");
const todoModel = require("../../model/todomodel");
const route = express.Router();
//create a todo
route.post("/todo",async (req,res)=>{
  const {title , name , description} = req.body;
  try{
    const todo = new todoModel({
        title,
        name,
        description
    })

    await todo.save()
     res.status(200).send(todo)
    //  res.json({todo,message:"todo is created"})
  }catch(error){
    console.log(error);
  }
})
//get all todo

route.get("/get", async(req,res)=>{
  try{
     const getTodos = await todoModel.find().select("name,title")
     res.send(getTodos)
    
  }catch(error){
    console.log(error)
  }
})
//get one todo

route.get("/get/:id", async(req,res)=>{
  try{
     const getSingleTodo = await todoModel.findById(req.params.id)
     res.send(getSingleTodo)
    
  }catch(error){
    console.log(error)
  }
})

//put update todos

route.put("/update", async(req,res)=>{
  try{
     const getUpdate = await todoModel.updateMany(
      {
      name:"sojib"
      }
     )
     res.send(getUpdate)
    
  }catch(error){
    console.log(error)
  }
})

//update

route.put("/update/:id", async(req,res)=>{
  try{
     const getUpdateTodo = await todoModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     await getUpdateTodo.save()
     res.send(getUpdateTodo)
    
  }catch(error){
    console.log(error)
  }
})

//delete todo

route.delete("/delete/:id", async(req,res)=>{
  try{
     const getDeleteTodo = await todoModel.findByIdAndDelete(req.params.id)
     await getDeleteTodo.save()
     res.send(getDeleteTodo)
    
  }catch(error){
    console.log(error)
  }
})

module.exports = route;