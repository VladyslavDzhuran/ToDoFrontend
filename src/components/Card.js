import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ToDoList from './ToDoList';
import EditTask from '../modals/EditTask';


const Cards = ({taskObj, index, deleteTask, updateList}) =>{

  const  handleDelete = () =>{
    deleteTask(index)
  }

  const[modal,setModal]=useState(false);

    const toggle = () =>{
      setModal(!modal)
    }

  const updateTask = (obj) =>{
      updateList(obj, index)
  }

    return (
      <div class="card-wrapper mr-5">
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{taskObj.user}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{taskObj.name}</Card.Subtitle>

    <label></label>
    <Card.Subtitle> Priority: {taskObj.priority}</Card.Subtitle>
    <Card.Subtitle> Status: {taskObj.status}</Card.Subtitle>
    <Card.Subtitle> DeadLine: {taskObj.deadLine}</Card.Subtitle>
    <Card.Text>
        <p className= "mt-5">{taskObj.description}</p>
    </Card.Text>
       <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
               <i class ="far fa-edit mt-5" style = {{"color": "#5DC250", "cursor": "pointer"}}
               onClick={() =>setModal(true)}></i>
               <i class ="fas fa-trash-alt mt-5" style = {{"color": "#5DC250", "cursor": "pointer"}}
               onClick={handleDelete}></i>
       <EditTask modal={modal} toggle={toggle} updateTask={updateTask}
       taskObj={taskObj}/>
      </div>
  </Card.Body>
</Card>
</div>
    )}


export default Cards;