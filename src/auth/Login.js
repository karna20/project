import React, { useState,useEffect } from "react";
import "../index.css";
import fire from "../firebase";
import secureStorage from "../SecureStorage";
import { useHistory , Link} from "react-router-dom";
import Student from "../student";
import Admin from "../admin"

const Login = () => {
  const [selected, setSelected] = useState("Faculty");
  const [error, setError] = useState({
    emailError:"",
    passwordError:"",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  var db = fire.firestore();
  const history = useHistory();
   var role1 = "";
  
//    useEffect(() => {
//     if(secureStorage.getItem("user"))
//     {
//         const user =  secureStorage.getItem("user");
//         if(user.role==="Student")
//         {
//             history.push("/home")
//         }
//         if(user.role==="Admin"){
//             history.push("/admin")
//         }
//     }
// }, []);


  async function advancedLogin(email) {

    await db.collection("Users").doc(email)
      .get()
      .then(function (doc) {
        if (doc.exists) {
        //  console.log("Document data:", doc.data());
          secureStorage.setItem("user",doc.data());
         // history.push("/Home")
          role1 = doc.data().role;
        //  console.log("inside advanced", role1);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

  }

 
  const handleLogin = async () => {

    setError({ 
        emailError:"",
        passwordError:"",
    
    });    
   
    
    if (user.email != "" && user.password != "") {
        
        advancedLogin(user.email);
        
      }
    await fire
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() =>{
          if(role1=="Student")
          {
            history.push("/home")
          }
          else{
            history.push("/admin")
          }
      })

      .catch((err) => {

        switch (err.code) {
          case "auth/invalid-email":

          case "auth/user-disabled":
          case "auth/user-not-found":
            setError((prev) => { 
                return {...prev,emailError:err.message}
            });
            break;
          case "auth/wrong-password":
            setError((prev) => { 
                return {...prev,passwordError:err.message}
            });
            break;
          default:

        }
      });
    
  };


 
 
  const handleChange = (e) => {
    const {name ,value } = e.target
    setUser((prev) => {
        return { ...prev,[name]:value }
    })
}



  return (
    <section className="login">
      <div className="loginContainer">
        <p class="text1">Sign In</p>

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
          <button onClick={handleLogin} className="button" style = {{"width":"100%"}}><span>Sign In</span></button>

          <p>
            Don't have an account? &nbsp;
            <Link to = "/register"> Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
