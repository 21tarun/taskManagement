import React from 'react'

function Tasks() {

    let [open,setOpen]=React.useState([])
    let [progress,setProgress]=React.useState([])
    let [completed,setCompleted]=React.useState([])
    React.useEffect(()=>{
        fetch("http://localhost:4000/getTasks",{
            
        })
        .then((result)=>result.json())
        .then(res=>{
            
            if(res.status==true){
                
                setOpen(res.data[0])
                setProgress(res.data[1])
                setCompleted(res.data[2])
            }
            else return alert(res.message)
            
        })

    },[])

    function dragToProgress(e,title){
        let data={title:title,status:'In-Progress'}
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
                alert('Task dragged')
                window.location.reload(true);
            }
            else return alert(res.message)
            
        })

    }
    function dragToCompleted(e,title){
        let data={title:title,status:'Completed'}
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
                alert('Task dragged')
                window.location.reload(true);
            }
            else return alert(res.message)
            
        })

    }
    function dragToDelete(e,title){
        let data={title:title}
        fetch("http://localhost:4000/delete",{
            method:"DELETE",
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((result)=>result.json())
        .then(res=>{
            console.log(res)
            if(res.status==true){
                alert('Task deleted')
                window.location.reload(true);
            }
            else return alert(res.message)
            
        })

    }

  return (
    
    <div className='tasks'>
        <div className='Name'>
            <div><h3>Open</h3></div>
            <div><h3>In-Progress</h3></div>
            <div><h3>Completed</h3></div>
        
        </div>
        <div className='task'>
        
        <div className='open'>
            {
                open.map(x=>
                    <li draggable onDragEnd={(e)=>dragToProgress(e,x.title)}>
                        <h4>{x.title}</h4><br/>
                        <p>{x.description}</p>
                    </li>
                )
            }
        </div>
        <div className='progres' >
            {
                progress.map(x=>
                    <li  draggable onDragEnd={(e)=>dragToCompleted(e,x.title)} >
                        <h4>{x.title}</h4><br/>
                        <p>{x.description}</p>
                    </li>
                )
            }

        </div>
        <div className='completed'>
            {
                completed.map(x=>
                    <li draggable onDragEnd={(e)=>dragToDelete(e,x.title)} >
                        <h4>{x.title}</h4><br/>
                        <p>{x.description}</p>
                    </li>
                )
            }
        </div>
        
    </div>
        
    </div>
    
  )
}

export default Tasks