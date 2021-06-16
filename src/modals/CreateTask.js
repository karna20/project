import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    var elements = document.getElementsByClassName('form-control'); 


    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        else if(name=="date"){
            setDate(value)
        }
        else{
            setDescription(value)
        }
    }
function resetvalue() {
   document.getElementById("1").innerText=null;
    document.getElementById("2").innerText=null;
    document.getElementById("3").innerText=null;
}
    const handleSave = (e) => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = date
        resetvalue();
        toggle();
        save(taskObj,e)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input id="1" type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Date</label>
                        <input id ="2" type="date" className = "form-control" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea  id ="3"  rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
            </ModalBody>
            <ModalFooter>
            <Button type = "submit"  color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;