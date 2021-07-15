import React, { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import fire from "../firebase";
import "../index.css";


const SignUp = () => {
    const [error, setError] = useState({
        emailError:"",
        passwordError:"",
      
      });
      const [user, setUser] = useState({
        email: "",
        password: "",
        role:"",
        name:"",
        surname:"",
        number:"",
      });
  var db = fire.firestore();
  const history = useHistory();

 
 
  const handleChange = (e) => {
    const {name ,value } = e.target
    setUser((prev) => {
        return { ...prev,[name]:value }
    })
}
const saveUser = () =>
{
    db.collection("Users").doc(user.email).set(
        {
          name: user.name,
          surname: user.surname,
          number: user.number,
          email: user.email,
          role: "Student",
        })

        .then(() => {
            history.push("/login")
        })
        .catch((error) => {
          alert(error.message);

        });

}
  const handleSignup = async (e) => {
      e.preventDefault();
    setError({ 
        emailError:"",
        passwordError:"",
       
    });    
   
    await fire
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
          saveUser();
        
      }
      )
      .catch((err) => {

        
        console.log("inside catch")
        switch (err.code) {
          case "auth/email-already-in-use":

          case "auth/invalid-email":
            setError((prev) => { 
                return {...prev,emailError:err.message}
            });
            break;
          case "auth/weak-password":
            setError((prev) => { 
                return {...prev,passwordError:err.message}
            });
            break;
          default:
              console.log("..");
                    }
      });

  };
 

  
  return (
    
    <section className="login">
    <div className="loginContainer">
    
      <p class="text1">Sign Up</p>
      <form >
      <label>Name</label>
      <input
        type="text"
        required
        value={user.name}
        name = "name"
        onChange={handleChange}
      />

         <label>Surname</label>
      <input
        type="text"
        required
        value={user.surname}
        name = "surname"
        onChange={handleChange}
      />       


         <label>Phone Number</label>
      <input
        type="tel"
        required
        value={user.number}
        name = "number"
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="text"
        required
        value={user.email}
        name = "email"
        onChange={handleChange}
      />
      <p className="errorMsg">{error.emailError}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={user.password}
        name = "password"
        onChange={handleChange}
      />
      <p className="errorMsg">{error.passwordError}</p>

      <div className="btnContainer">
        <button  type = "submit" className="button" style = {{"width":"100%"}} onClick={handleSignup}><span>Sign Up</span></button>

        <p>
        Already have an account?  &nbsp;
          <Link to="/login" >Sign In</Link>
        </p>
      </div>
      </form>
    </div>
  </section>

  );


};

export default SignUp;