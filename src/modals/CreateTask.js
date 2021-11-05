import React, { Component,useState } from 'react';
import { Button, Modal, ModalFooter,ModalHeader, ModalBody } from "reactstrap";
import { Form } from 'react-bootstrap';
import Status from '../Enums/Status';
import Priority from '../Enums/Priority';
import Category from '../Enums/Category';
import UserId from '../Enums/UserId';

const CreateTask = ({modal,toggle,save}) => {

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
    const handleSave = () =>{
        let taskObj={}
        taskObj["name"] = taskName
        taskObj["status"] = parseInt(status)
        taskObj["priority"] = parseInt(priority)
        taskObj["deadLine"] = deadLine
        taskObj["description"] = description
        taskObj["userId"] = parseInt(userId)
        taskObj["category"] = parseInt(category)
        save(taskObj)
    }
    return (
               <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                      <form>
                      <div className="form-group">
                            <label>User</label>
                                  <Form.Select  value={userId} onChange={handleChange}  name="userId">
                            {Object.keys(UserId).map(key => (
                            <option key={key} value={key}>
                            {UserId[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>
                            <div className="form-group">
                            <label>Category</label>
                                  <Form.Select  value={category} onChange={handleChange}  name="category">
                            {Object.keys(Category).map(key => (
                            <option key={key} value={key}>
                            {Category[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" minlength="6" maxlength="15" className="form-control" value=
                                {taskName} onChange={handleChange} name="taskName"/>
                            </div>
                            <div className="form-group">
                            <label>Priority</label>
                                  <Form.Select  value={priority} onChange={handleChange} name="priority">
                            {Object.keys(Priority).map(key => (
                            <option key={key} value={key}>
                            {Priority[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>
                            <div className="form-group">
                            <label>Status</label>
                                  <Form.Select  value={status} onChange={handleChange} name="status">
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
                                  {description} onChange={handleChange} name="description" minlength="3" maxlength="6"> </textarea>
                            </div>
                      </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create</Button>
                    <Button color = "secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
    );
};

export default CreateTask;