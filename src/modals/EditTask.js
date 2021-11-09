import React, { Component,useEffect,useState } from 'react';
import { Button, Modal, ModalFooter,ModalHeader, ModalBody } from "reactstrap";
import { Form } from 'react-bootstrap';
import Status from '../Enums/Status';
import Priority from '../Enums/Priority';
import Category from '../Enums/Category';
import UserId from '../Enums/UserId';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {

  const[userId,setUserId]=useState('');
    const[taskName,setTaskName]=useState('');
    const[description,setDescription]=useState('');
    const[status,setStatus]=useState('');
    const[priority,setPriority]=useState('');
    const[deadLine,setDeadLine]=useState('');
    const[category,setCategory]=useState('');

    const handleChange = (e) => {
         const {name, value} = e.target
        if(name=="userId")
        {
           setUserId(value)
        }
        else if(name=="category")
        {
           setCategory(value)
        }
        else if(name=="taskName")
        {
           setTaskName(value)
        }
        else if(name=="priority")
        {
           setPriority(value)
        }
        else if(name=="status")
        {
          console.log("ERROR!!!!!!!!!!!", status, parseInt(status))
           setStatus(value)
        }
        else if(name=="deadLine")
        {
           setDeadLine(value)
        }
        else
        {
            setDescription(value)
        }
    }
    const handleUpdate = (e) =>{
       e.preventDefault();
       let tempObj={}
       tempObj["name"] = taskName
       tempObj["status"] = parseInt(status)
       tempObj["priority"] = parseInt(priority)
       tempObj["deadLine"] = deadLine
       tempObj["description"] = description
       tempObj["userId"] = parseInt(userId)
       tempObj["category"] = parseInt(category)
       updateTask(tempObj)
      //  window.location.reload()
    }
      useEffect(() =>{
          setDescription(taskObj.description)
          setDeadLine(taskObj.deadLine)
          setTaskName(taskObj.name)
          setUserId(taskObj.userId)
          setStatus(taskObj.status)
          setPriority(taskObj.priority)
          setCategory(taskObj.category)
      },[])
      return (
        <Modal isOpen={modal} toggle={toggle}>
         <ModalHeader
             toggle={toggle}>Edit Task</ModalHeader>
         <ModalBody>
         <form>
                      <div className="form-group">
                            <label>User</label>
                                  <Form.Select  value={userId} onChange={handleChange} name="userId">
                            <option value="none" hidden="">Choose user</option>
                            {Object.keys(UserId).map(key => (
                            <option key={key} value={key}>
                            {UserId[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                            <label>Category</label>
                                  <Form.Select  value={category} onChange={handleChange}  name="category">
                                  <option value="none" hidden="">Choose category</option>
                            {Object.keys(Category).map(key => (
                            <option key={key} value={key}>
                            {Category[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" minlength="3" maxlength="15" className="form-control" value= 
                                {taskName} onChange={handleChange} placeholder="Enter task name" name="taskName"/>
                            </div>

                            <div className="form-group">
                            <label>Priority</label>
                                  <Form.Select  value={priority} onChange={handleChange} name="priority">
                            <option value="none" hidden="">Choose priority</option>
                            {Object.keys(Priority).map(key => (
                            <option key={key} value={key}>
                            {Priority[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                            <label>Status</label>
                                  <Form.Select  value={status} onChange={handleChange} name="status">
                            <option value="none" hidden="">Choose status</option>
                            {Object.keys(Status).map(key => (
                            <option key={key} value={key}>
                            {Status[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                            <label>End date:</label>
                                <input type="date" className="form-control"
                                min="2021-11-02" max="2022-12-12" value={deadLine} onChange={handleChange} name="deadLine"/>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                  <textarea rows = "5"  className="form-control" value=
                                  {description} onChange={handleChange} name="description" placeholder="Enter description"  
                                  minlength="3" maxlength="130"> </textarea>
                            </div>

                      </form>
         </ModalBody>
         <ModalFooter>
             <Button color="primary" onClick={handleUpdate} >Update</Button>
             <Button color = "secondary" onClick={toggle}>Cancel</Button>
         </ModalFooter>
     </Modal>
);
};

export default EditTask;