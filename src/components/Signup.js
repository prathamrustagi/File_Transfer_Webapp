import React,{useState} from "react";
import './Login_Signup.css'


function Signup(){
    const[SName, SetSName] = useState("");
    const[SEmail, SetSEmail] = useState("");
    const[SPass, SetSPass] = useState("");
    const[SCPass, SetSCPass] = useState("");

    const nameChangeHandler =(event)=>{
        SetSName(event.target.value);
    }

    const emailChangeHandler =(event)=>{
        SetSEmail(event.target.value);
    }

    const passChangeHandler =(event)=>{
        SetSPass(event.target.value);
    }

    const cPassChangeHandler =(event)=>{
        SetSCPass(event.target.value);
    }

   const onSSubmitHandler =(event)=>{
    event.preventDefault();

    const SignupData ={
        Name:SName,
        Email:SEmail,
        Password:SPass,
        ConfirmPassword:SCPass 
    }

    console.log(SignupData);
   }



    return(
       <div className="body">
            <div className="container">
               
                <div className="signup">
                    <div className="title">
                        <h1>Signup</h1>
                    </div>
                    <form action="" onSubmit={onSSubmitHandler}>
                        <div className="name form_content" >
                            <label htmlFor="">Name*</label>
                            <br />
                            <input type="text" required onChange={nameChangeHandler}/>
                        </div>

                        <div className="email form_content">
                            <label htmlFor="Email">Email*</label>
                            <br />
                            <input type="email" required onChange={emailChangeHandler} />
                        </div>

                        <div className="password form_content">
                            <label htmlFor="">Create Password*</label>
                            <br />
                            <input type="password" required onChange={passChangeHandler} />
                        </div>

                        <div className="password form_content">
                            <label htmlFor="">Confirm Password*</label>
                            <br />
                            <input type="password" required onChange={cPassChangeHandler} />
                        </div>

                        <div className="submit form_content">
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
    );
}

export default Signup;