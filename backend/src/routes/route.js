const express= require('express')
const router=express.Router()
const taskModel=require('../models/taskModel')

router.get("/",function(req,res){
    res.send({message:"all are good"})
})

router.put("/createEditTask",async function(req,res){
    let data=req.body
    if(!data) return res.status(400).send({status:false,message:"body data is required"})
    if(!data.title) return res.status(400).send({status:false,message:"title is mandatory"})
    if(!data.title.trim()) return res.status(400).send({status:false,message:"title should be valid"})
    if(data.status){
        if(!['Open','In-Progress','Completed'].includes(data.status)) return res.status(400).send({status:false,message:"status should be ['Open','In-Progress','Completed']"})
    }

    let saveData= await taskModel.findOneAndUpdate({title:data.title},data,{upsert:true,new:true})
    res.status(201).send({status:true,message:"Successfully created",data:saveData})
})

router.delete("/delete",async function(req,res){
    let data=req.body
    await taskModel.findOneAndDelete({title:data.title})
    res.status(200).send({status:true,message:"deleted successfully"})
})

router.get('/getTasks',async function(req,res){
    let tasks= await taskModel.find()
    let openTasks=[]
    let inProgressTasks=[]
    let completedTasks=[]
    for(let i=0;i<tasks.length;i++){
        if(tasks[i]['status']=='Open') openTasks.push(tasks[i])
        if(tasks[i]['status']=='In-Progress') inProgressTasks.push(tasks[i])
        if(tasks[i]['status']=='Completed') completedTasks.push(tasks[i])
    }
    res.status(200).send({status:true,message:"success",data:[openTasks,inProgressTasks,completedTasks]})
})

module.exports=router