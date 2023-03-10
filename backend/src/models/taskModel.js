const mongoose= require('mongoose')


const task= mongoose.Schema({
    title:String,
    description:String,
    status:{
        type:String,
        enum:['Open','In-Progress','Completed'],
        default:'Open'
    }
},{timestamps:true})

module.exports=mongoose.model('task',task)