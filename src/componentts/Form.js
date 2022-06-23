import React from 'react';
//import { useEffect } from 'react';
import { useState } from 'react';



function Form() {
    const intialValues = { email:"" , password:""};
   const[Text,setText] = useState(intialValues )

    // const handlecha = (event) => {
    //     console.log(event.target.[name]:value)
    //     setText(event.target.value)
    // }

    const handlecha = (event) => {
        const { name , value } = event.target;
        setText({...Text,[name]:value}); // difine details like object 
        // setText({value:event.target.value});
        console.log(Text)
    }

    const handleSubmit = (event) => {
        alert('A email was submitted: ' +  Text.email + " " + Text.password);
        event.preventDefault();
      }


    const Style = {
        color:"CornflowerBlue",
        margin:"2px"
     } 
  return (
    <div>
    <pre>{JSON.stringify(Text)}</pre>
        <form>
            <div className={` form-check form-switch text-dark `}>
                <div className="mb-3">
                    <label for="Email" style={Style}  htmlFor="flexSwitchCheckDefault" className="forlable">Email address</label>
                    <input type="email" className="form-control" name="email" id="Email" value={Text.email} onChange={handlecha} aria-describedby="emailHelp"  placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label for="pass" style={Style}  htmlFor="flexSwitchCheckDefault" className="forlable">Password</label>
                    <input type="password" className="form-control" name = "password" value={Text.password} onChange={handlecha}  id="pass"  placeholder="Abcd12@" required/>
                </div>   
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form