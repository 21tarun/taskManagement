import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddTask() {
    let [title,setTitle]=React.useState("")
    let [description,setDescription]=React.useState("")
    let  navigate =useNavigate()
    
    function addTask(){
        if(!title) return alert("title required")
        if(!description) return alert("description required")
        console.log(title,description)
        let data={title,description}
        fetch("http://localhost:4000/createEditTask",{
            method:"PUT",
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((result)=>result.json())
        .then(res=>{
            console.log(res)
            if(res.status==true){
                alert('Task Created successfully')
                navigate('/')
            }
            else return alert(res.message)
            
        })


    }
  return (
<div class="container">
  <h2>Create Task</h2>
  
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control"  placeholder="Enter Title "  onChange={(e)=>{setTitle(e.target.value)}}/>
    </div>
    <div class="form-group">
      <label for="pwd">Description:</label>
      <input type="text" class="form-control"  placeholder="Enter Description"  onChange={(e)=>{setDescription(e.target.value)}}/>
    </div>

    <button type="submit" class="btn btn-default" onClick={addTask}>Add</button>
  
</div>
  )
}

export default AddTask