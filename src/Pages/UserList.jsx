import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import './lecture.css';
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from '../components/Navbar';
const UserList= () => {
    const [modal, setModal] = useState(false);
    const [Users, setUsers] = useState([])
    const [serachTerm, setsearchTerm]=useState([])
   
    useEffect(() => {
        getUsers();
          },[])
    
    function getUsers()
    {
        db.collection("Users").onSnapshot(function (querySnapshot){

            setUsers(
                querySnapshot.docs.map((doc) =>({
                    
                id: doc.id,
                Name : doc.data().name,
                Surname : doc.data().surname,
                Email : doc.data().email,
                Number : doc.data().number,
            }))
            );
            }); 
            // searchArray=Users
            
            
}

    const toggle = () => {
        setModal(!modal);
    }





    const renderLecture=(Users,index)=>{
        return(
            <tr key={index}>
                <td>{Users.Name}</td>
                <td>{Users.Surname}</td>
                <td>{Users.Email}</td>
                <td>{Users.Number}</td>
            
            </tr>
        )
    }
    

    return (
        <>
        <Navbar/>
            <div className = "header text-center">
                <h3>UserList</h3>
                
            </div>
            <input type="text" onChange={(e)=>{setsearchTerm(e.target.value)}} placeholder="Search Name..." style={{float:'left',width:'31%',marginTop:15,borderColor:'#000',borderWidth:1}}/>
            <div className = "task-container">
                
                <ReactBootStrap.Table striped bordered hover height="50">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email-Id</th>
                            <th>Mobile number</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {Users!=0 && Users.filter((val)=>{
                        if(serachTerm==''){
                            return val
                        }
                    else if(val.Name.toLowerCase().includes(serachTerm.toLowerCase())){
                        return val
                    }
                    else if(val.Email.toLowerCase().includes(serachTerm.toLowerCase())){
                        return val
                    }
                    }).map(renderLecture)}
                    </tbody>
                </ReactBootStrap.Table>
                
            </div>

           
        </>
    );
};

export default UserList;