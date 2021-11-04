import React,{useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card'
import axios from "axios";


const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList]=useState([])


      useEffect(async() => {
          let arr = await axios.get(`https://localhost:44370/taskItem`);
          if(arr)
          {
            setTaskList(arr.data)
          }
      }, [])

      const deleteTask = async (index) =>{
          await axios.delete(`https://localhost:44370/taskItem/${index}`)
          const arr =  await axios.get("https://localhost:44370/taskItem")
          setTaskList(arr.data)
          setModal(false)
      }

    const toggle = () =>{ 
        setModal(!modal);
    }
             
    const saveTask = async (taskObj) => {
        debugger
        await axios.post(`https://localhost:44370/taskItem`, taskObj)
        const arr =  await axios.get("https://localhost:44370/taskItem") 
        setTaskList(arr.data)
        setModal(false)
    }

    const updateList = async (taskObj, index) =>{
        console.log(taskObj)
        console.log(index)
        await axios.put(`https://localhost:44370/taskItem/${index}`,taskObj)
        const arr =  await axios.get("https://localhost:44370/taskItem")
        setTaskList(arr.data)
        setModal(false)
    }
    return(
        <>
           <div className="header text-center">
                  <h3>Todo List Багряного Бобра</h3>
                  <img src="bober.jpg" className="image"></img>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="task-container">
                {taskList.map((obj, index) => <Card taskObj = {obj} index = {obj.id}
                 deleteTask = {deleteTask} updateList={updateList}/>)}
                {/* {taskList.map((obj) => <li>{obj.Description}</li>)} */}
            </div>
            <CreateTask toggle = {toggle} modal={modal} save={saveTask}/> 
        </>
    )
}

export default ToDoList;
