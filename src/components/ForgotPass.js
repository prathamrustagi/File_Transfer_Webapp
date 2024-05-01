import React from "react";

function Forgot(){
    const[Email, SetEmail] = useState("");

    const lEmailHandler=(event)=>{
        SetEmail(event.target.value);
        }

        const onSubmitHandler=(event)=>{
            event.preventDefault();
            const loginData ={
                Email:NewEmail
            }
            console.log(loginData);
            }

    return(
<div className="body">
<div className="container">
<form onSubmit={onSubmitHandler}>
<div className="email form_content ">
                            <label htmlFor="">Email*</label>
                            <br />
                            <input type="email" name="" id="" required onChange={lEmailHandler}/>    
                        </div>
</form>
</div>
</div>
    );

}
export default Forgot;