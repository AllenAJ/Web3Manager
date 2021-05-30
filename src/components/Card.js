import React, {useState} from 'react';
import EditTask from './modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#8860FF",
            secondaryColor : "#8860FF"
        },
        {
            primaryColor : "#8860FF",
            secondaryColor : "#8860FF"
        },
        {
            primaryColor : "#8860FF",
            secondaryColor : "#8860FF"
        },
        {
            primaryColor : "#8860FF",
            secondaryColor : "#8860FF"
        },
        {
            primaryColor : "#8860FF",
            secondaryColor : "#8860FF"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
/*<i style="color: black;margin-right: 7px;font-size: 13px;" ></i> */
    return (
        <div class = "card-wrapper">
            <div class = "card-top" ></div>
            <div class = "task-holder">
                
                <span class = "card-header" >                    
                <i class = "fas fa-bars" style={{"color" : '#6B727C'}} onClick = {() => setModal(true)}> </i>
  {taskObj.Name}</span>
                <p class = "description">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;