import React, { Component,useState } from 'react';
import { Button, Modal, ModalFooter,ModalHeader, ModalBody } from "reactstrap";
import { Form } from 'react-bootstrap';
import Estatus from '../Enums/Status'
import Status from '../Enums/Status';
import Priority from '../Enums/Priority';
import Category from '../Enums/Category';
import User from '../Enums/User';

const CreateTask = ({modal,toggle,save}) => {

    const[user,setUser]=useState('');
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
           setUser(value)
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
        taskObj["status"] = 1
        taskObj["priority"] = 1
        taskObj["deadLine"] = deadLine
        taskObj["description"] = description
        taskObj["userId"] = 1
        taskObj["category"] = category

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
                                  <Form.Select  value={user} onChange={handleChange}>
                            {Object.keys(User).map(key => (
                            <option key={key} value={key}>
                            {User[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

 
                            <div className="form-group">
                            <label>Category</label>
                                  <Form.Select  value={category} onChange={handleChange}>
                            {Object.keys(Category).map(key => (
                            <option key={key} value={key}>
                            {Category[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" minlength="6" maxlength="6" className="form-control" value=
                                {taskName} onChange={handleChange} name="taskName"/>
                            </div>

                            <div className="form-group">
                            <label>Priority</label>
                                  <Form.Select  value={priority} onChange={handleChange}>
                            {Object.keys(Priority).map(key => (
                            <option key={key} value={key}>
                            {Priority[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                            <div className="form-group">
                            <label>Status</label>
                                  <Form.Select  value={status} onChange={handleChange}>
                            {Object.keys(Status).map(key => (
                            <option key={key} value={key}>
                            {Status[key]}
                            </option>))}
                                  </Form.Select >
                                  </div>

                              {/* <Form.Select aria-label="Default" className="form-control"
                               value={status} onChange={handleChange} name="status"> */}
                                   {/* <option>Choose Status</option>
                                   <option value="Done">Done</option>
                                   <option value="In progress">In progress</option>
                                   <option value="Not started">Not started</option> */}
                              {/* </Form.Select> */}

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