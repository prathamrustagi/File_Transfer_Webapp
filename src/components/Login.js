import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Signup from "./Signup";
import './Login_Signup.css';


function Login(){
    const[NewEmail, SetEmail] = useState("");
    const[NewPassword, SetPassword]=useState("");
    const [visible, setVisible] = useState(false);

const lEmailHandler=(event)=>{
SetEmail(event.target.value);
}

const lPassHandler=(event)=>{
    SetPassword(event.target.value);
    }

    const toggleVisibility = () => {
        setVisible(!visible);
      };

const onSubmitHandler=(event)=>{
event.preventDefault();
const loginData ={
    Email:NewEmail,
    Password:NewPassword
}
console.log(loginData);
}

    return(
       <div className="body">
            <div className="container">
                <div className="loginBox">
                    <div className="title">
                        <h1>Login</h1>
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        <div className="email form_content ">
                            <label htmlFor="">Email*</label>
                            <br />
                            <input type="email" name="" id="" required onChange={lEmailHandler}/>    
                        </div>

                        <div className="password form_content">
                            <label htmlFor="">Password*</label>
                            <br />
                            <input type={visible ? "text" : "password"} required onChange={lPassHandler}/>
                            <span className="hideShow" onClick={toggleVisibility}>{visible ? "Hide" : "Show"}
                            </span>
                        </div>

                        <div className="submit form_content">
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                    <div className='haventsign form_content' ><h5>Don't have account? <Link to='/Signup'> Sign up</Link></h5></div>

                   
                </div>
            </div>
            </div>
    );
}

export default Login;