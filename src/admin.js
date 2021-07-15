import React,{useEffect,useState} from "react";
import { db } from './firebase';
import Navbar from './components/Navbar';
import "./admin.css"
import { getDocument } from "pdfjs-dist";
//admin page edit here

const Admin = () => {
    const [ActiveList, setActiveList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const [Users, setUsers] = useState([])
    const [pdfs, setDoc] = useState([])


  
      useEffect(() => {
      getCount();
          },[])
    function getCount()
    {
      db.collection("activeList").onSnapshot(function (querySnapshot){
        setActiveList(
            querySnapshot.docs.map((doc) =>({
            id: doc.id,
        }))
        );
        });
        db.collection("completedList").onSnapshot(function (querySnapshot){
          setCompletedList(
              querySnapshot.docs.map((doc) =>({
              id: doc.id,
            
          }))
          );
          });
          db.collection("Users").onSnapshot(function (querySnapshot){

            setUsers(
                querySnapshot.docs.map((doc) =>({    
                id: doc.id,
                
            }))
            );
            });
            db.collection("docList").onSnapshot(function (querySnapshot){
              setDoc(
                  querySnapshot.docs.map((doc) =>({
                  id: doc.id,    
              }))
              );
              });  

    }




    return (
       <>
     
  <Navbar/>
  <div class="container bootstrap snippets bootdey">
  <div class="row">
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content gray">
          <div class="circle-tile-description text-faded">Total Students</div>
          <div class="circle-tile-number text-faded ">{Users.length}</div>
          
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-check fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content gray">
          <div class="circle-tile-description text-faded">Total Active Quiz</div>
          <div class="circle-tile-number text-faded ">{ActiveList.length}</div>
          
        </div>
      </div>
    </div> 
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading dark-blue "><i class="fa fa-check-square fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content gray">
          <div class="circle-tile-description text-faded">Total Completed Quiz</div>
          <div class="circle-tile-number text-faded ">{completedList.length}</div>
          
        </div>
      </div>
    </div> 
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-book fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content gray">
          <div class="circle-tile-description text-faded">Total Material</div>
          <div class="circle-tile-number text-faded ">{pdfs.length}</div>
          
        </div>
      </div>
    </div>
    </div>
    </div>

           

        </>
    );
};

export default Admin;