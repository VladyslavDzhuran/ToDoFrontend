import React, { Component,useEffect,useState } from 'react';
import { Button, Modal, ModalFooter,ModalHeader, ModalBody } from "reactstrap";
import { Form } from 'react-bootstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {

  const[taskName,setTaskName]=useState('');
  const[description,setDescription]=useState('');
  const[deadLine,setDeadLine]=useState('');

    const handleChange = (e) => {
      const {name, value} = e.target

     if(name=="taskName")
     {
        setTaskName(value)
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
       tempObj["deadLine"] = deadLine
       tempObj["description"] = description
       updateTask(tempObj)
    }
      useEffect(() =>{
          setDescription(taskObj.Description)
          setDeadLine(taskObj.DeadLine)
          setTaskName(taskObj.Name)
      },[])
    return (
               <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Edit Task</ModalHeader>
             <ModalBody>
                      <form>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" minlength="6" maxlength="15" className="form-control" value=
                                {taskName} onChange={handleChange} placeholder="Enter task name"  name="taskName"/>
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
                                  minlength="3" maxlength="6"> </textarea>
                            </div>
                      </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>Update</Button>
                    <Button color = "secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
    );
};

export default EditTask;