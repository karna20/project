import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Card1 from './Card1';
import './quiz.css';
const Quiz = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [ActiveList, setActiveList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const [showActive,setShowActive] = useState(false)
    const [showCompleted,setShowCompleted] = useState(false)
    

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
        let active = localStorage.getItem("activeList")
        if(active){
            let obj = JSON.parse(active)
            setActiveList(obj)
        }
        let completed = localStorage.getItem("completedList")
        if(completed){
            let obj = JSON.parse(completed)
            setCompletedList(obj)
        }
        
       
    },[])


    const deleteTask = (index) => {
       
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(taskList))
        setTaskList(tempList)
        window.location.reload()    
    }

    const updateListArray = (obj, index) => {
        let tempList = ActiveList
        tempList[index] = obj
        localStorage.setItem("activeList", JSON.stringify(tempList))
        setActiveList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
    const todayDate = () =>
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
    const saveActive = (taskObj) => {
        let tempList = ActiveList
        tempList.push(taskObj)
        localStorage.setItem("activeList", JSON.stringify(tempList))
        setActiveList(ActiveList)
    }
    const deleteActive = (index) => {
       
        let tempList = ActiveList
        tempList.splice(index, 1)
        localStorage.setItem("activeList", JSON.stringify(ActiveList))
        setActiveList(tempList)
    }
    const deleteActiveIcon = (index) => {
      if(window.confirm("Are you sure?"))
      {
        let tempList = ActiveList
        tempList.splice(index, 1)
        localStorage.setItem("activeList", JSON.stringify(ActiveList))
        setActiveList(tempList)
        window.location.reload()    

      } 
     
    }
    
    const saveCompleted = (taskObj) => {
        let tempList = completedList
        tempList.push(taskObj)
        localStorage.setItem("completedList", JSON.stringify(tempList))
        setCompletedList(tempList)
    }
    const Results = () => (
        
        <div id="results" className="task-container">
            {ActiveList && ActiveList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteActiveIcon = {deleteActiveIcon} updateListArray = {updateListArray} /> )}
        </div>
      )

    const Complete = () => (
        <div id="results" className="task-container">
            {completedList && completedList.map((obj , index) => <Card1 taskObj = {obj} index = {index} deleteActiveIcon = {deleteActiveIcon} updateListArray = {updateListArray} /> )}
        </div>
      )

    const activeQuiz = () =>
    {
        setShowActive(true);
        setShowCompleted(false);

        if(taskList !=null){

            for(var i=0;i<taskList.length;i++){

                const userExists = ActiveList.some((user) => user.Name === taskList[i].Name);

                if(!userExists && taskList[i].Date >= todayDate()){
                    
                    saveActive(taskList[i])
                    deleteTask(i)
                }
            }
        }
    }
    const completedQuiz =() =>
    {
        setShowActive(false);
        setShowCompleted(true);
        if(ActiveList != null)
             {
                 for(let i=0;i<ActiveList.length;i++)
                 {  
                     if (ActiveList[i].Date < todayDate())
                     {
                        saveCompleted(ActiveList[i])
                        deleteActive(i)
                     }
                 }
             }
         
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Quiz</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Quiz</button>
                
            </div>
            <input type="radio" value="Active" name="gender" onClick = {activeQuiz} /> Active 
           &nbsp;
            <input type="radio" value="Completed" onClick = {completedQuiz} name="gender"/> Completed
            <div className = "task-container">
            {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )} */}
            {showActive ? <Results /> : null}
            {showCompleted ? <Complete /> : null}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>

           
        </>
    );
};

export default Quiz;