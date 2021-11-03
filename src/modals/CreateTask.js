import React, { Component,useState } from 'react';
import { Button, Modal, ModalFooter,ModalHeader, ModalBody } from "reactstrap";
import { Form } from 'react-bootstrap';

const CreateTask = ({modal,toggle,save}) => {

    const[user,setUser]=useState('');
    const[taskName,setTaskName]=useState('');
    const[description,setDescription]=useState('');
    const[status,setStatus]=useState('');
    const[priority,setPriority]=useState('');
    const[deadLine,setDeadLine]=useState('');

    const handleChange = (e) => {
         const {name, value} = e.target

        if(name=="user")
        {
           setUser(value)
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
        taskObj["user"] = user
        taskObj["name"] = taskName
        taskObj["status"] = 1
        taskObj["priority"] = 1
        taskObj["deadLine"] = deadLine
        taskObj["description"] = description
        taskObj["userId"] = 1
        taskObj["category"] = 1

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
                              <Form.Select aria-label="Default" className="form-control"
                               value={user} onChange={handleChange} name="user">
                                   <option>Choose User</option>
                                 <option value="Vlad">Vlad</option>
                                 <option value="Volodya">Volodya</option>
                                 <option value="Nazar">Nazar</option>
                              </Form.Select>
                            </div>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input type="text" className="form-control" value=
                                {taskName} onChange={handleChange} name="taskName"/>
                            </div>
                            <div className="form-group">
                            <label>Priority</label>
                              <Form.Select aria-label="Default" className="form-control"
                               value={priority} onChange={handleChange} name="priority">
                                   <option>Choose Priority</option>
                                   <option value="Critical">Critical</option>
                                   <option value="Important">Important</option>
                                   <option value="Medium">Medium</option>
                                   <option value="Low">Low</option>    
                              </Form.Select>
                            </div>
                            <div className="form-group">
                            <label>Status</label>
                              <Form.Select aria-label="Default" className="form-control"
                               value={status} onChange={handleChange} name="status">
                                   <option>Choose Status</option>
                                   <option value="Done">Done</option>
                                   <option value="In progress">In progress</option>
                                   <option value="Not started">Not started</option>
                              </Form.Select>
                            </div>
                            <div className="form-group">
                            <label>End date:</label>
                                <input type="date" className="form-control"
                                min="2021-11-02" max="2022-12-12" value={deadLine} onChange={handleChange} name="deadLine"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                  <textarea rows = "5"  className="form-control" value=
                                  {description} onChange={handleChange} name="description"> </textarea>
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