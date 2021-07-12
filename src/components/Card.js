import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, id, deleteActiveIcon, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const i = Math.floor(Math.random() * 5);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, id)
    }

    const handleDelete = () => {
        deleteActiveIcon(id)
    }
    
    return (
        <div class = "card-wrapper mr-3" style ={{margin:10,height:160,width:260}}>
            <div class = "card-top" style={{"background-color": colors[i%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[i%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <a className = "mt-3" href={taskObj.Description}>Google form Link</a>
                <p className = "mt-3">Date:{taskObj.Date}</p>
                {/* {checkActiveStatus()} */}
                <div style={{"position": "absolute", "right" : "10px", "bottom" : "10px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[i%5].primaryColor, "cursor" : "pointer",paddingRight : 10}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[i%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;
