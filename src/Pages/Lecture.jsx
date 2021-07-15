import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import CreateLecture from './CreatLecture';
import './lecture.css';
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from '../components/Navbar';
const Lecture= () => {
    const [modal, setModal] = useState(false);
    const [LectureList, setLectureList] = useState([])
    const [showLecture,setShowLecture] = useState(false)
    

    useEffect(() => {
        getLectureList();
          },[])
    
    function getLectureList()
    {
        db.collection("LectureList").onSnapshot(function (querySnapshot){
            setLectureList(
                querySnapshot.docs.map((doc) =>({
                    
                id: doc.id,
                Name : doc.data().Name,
                Time : doc.data().Time,
                Link : doc.data().Link,
            
            }))
            );
            }); 
            console.log(LectureList)
            
}

    const updateListArray = (obj, id) => {
        
        db.collection("LectureList").doc(id).update({
            Name : obj.Name,
            Time : obj.Time,
            Link : obj.Link,
        });
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        db.collection("LectureList").add({
            Name : taskObj.Name,
            Time : taskObj.Time,
            Link : taskObj.Link,
            Date : todayDate()
        }).then(function() {   
                window.location.reload();   
            })
           
        
       activeLecture();
       // {<Results />}
    }
    const todayDate = () =>
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
   
    const deleteLecture = (id) => {
       
                db.collection("LectureList").doc(id).delete(); 
    }
    const deleteLectureIcon = (id) => {
      if(window.confirm("Are you sure?"))
      {
           
        db.collection("LectureList").doc(id).delete(); 
      } 
     
    }
    

    const activeLecture = () =>
    {
    
        console.log(LectureList)
        if(LectureList !=null){

            for(let i=0; i<LectureList.length;i++){

                if(LectureList[i].Date < todayDate()){ 
                    deleteLecture(LectureList[i].id)  

                 }
                
            }
        }
    }

    const renderLecture=(LectureList,index)=>{
        return(
            <tr key={index}>
                <td>{LectureList.Name}</td>
                <td>{LectureList.Time}</td>
                <td><a href={LectureList.Link}>{LectureList.Link}</a></td>
                <td><button type="button" class="btn btn-danger" onClick={() =>deleteLectureIcon(LectureList.id)}>X</button></td>
            
            </tr>
        )
    }
    

    return (
        <>
        <Navbar/>
            <div className = "header text-center">
                <h3>Lecture</h3>
                <button className = "btn mt-2" onClick = {() => setModal(true)} >Create Lecture</button>
                
            </div>
    
            <div className = "task-container">
                <ReactBootStrap.Table striped bordered hover height="50">
                    <thead className="tabhd">
                        <tr>
                            <th>Subject Name</th>
                            <th>Time</th>
                            <th>Lecture Link</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {LectureList!=0 && LectureList.map(renderLecture)} 
                    
                    </tbody>
                </ReactBootStrap.Table>
                
            </div>
            <CreateLecture toggle = {toggle} modal = {modal} save = {saveTask}/>

           
        </>
    );
};

export default Lecture;