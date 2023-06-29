import React, {useState, useEffect } from 'react'

  let myStyle={
    color: "white",
    backgroundColor:"black",
 
 }
function validateForm(prm_username,prm_email,prm_password,prm_cnfpassword){
  return true;
}

 function TextForm(props) {
   const handleSubClick = (event) => {
     event.preventDefault();
     let b = validateForm(username,email,password,cmfpassword)
     if(b){
       event.preventDefault();
       const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           userId: username,
           id: email,
           title: password,
           body: cmfpassword,
         }),
       };
       fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
         .then((response) => response.json())
         .then((data)=> {
          console.log(data);
         });
     }
     alert(username + " " + email + " " + password + " " + cmfpassword);
   };

   const handleOnChange = (event) => {
     console.log(event.target.value);
     setUsername(event.target.value);
   };
   const handleOnEmailChange = (event) => {
     setEmail(event.target.value);
   };
   const handleOnPassChange = (event) => {
     setPassword(event.target.value);
   };
   const handleOnCmfPassChange = (event) => {
     setCmfpassword(event.target.value);
   };

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [cmfpassword, setCmfpassword] = useState("");

   return (
     <div>
       <div className="container w-50 mt-3" style={myStyle}>
         <div className="mb-3 ">
           <div className="card  w-50 mx-auto">
             <div className="card-header" style={myStyle}>
               <h3>Registration Form</h3>
             </div>
           </div>
           <div className="mb-3 w-50 mx-auto">
             <label for="Name" className="form-label">
               Username
             </label>
             <input
               type="text"
               className="form-control align-items-center"
               id="name"
               placeholder="username"
               value={username}
               onChange={handleOnChange}
             />
           </div>
           <div className="mb-3 w-50 mx-auto">
             <label for="staticEmail" className="form-label">
               Email
             </label>
             <input
               type="email"
               readonly
               className="form-control"
               id="staticEmail"
               value={email}
               onChange={handleOnEmailChange}
             />
           </div>
           <div className="mb-3 w-50 mx-auto">
             <label for="inputPassword" className="form-label">
               Password
             </label>
             <input
               type="password"
               className="form-control"
               id="inputPassword"
               value={password}
               onChange={handleOnPassChange}
             />
           </div>
           <div className="mb-3 w-50 mx-auto">
             <label for="confirmPassword" className="form-label">
               Confirm Password
             </label>
             <input
               type="password"
               className="form-control"
               id="confirmPassword"
               value={cmfpassword}
               onChange={handleOnCmfPassChange}
             />
           </div>
           <div className="mb-3 w-50 mx-auto">
             <div className="form-check">
               <input
                 className="form-check-input is-invalid"
                 type="checkbox"
                 value=""
                 id="invalidCheck3"
                 aria-describedby="invalidCheck3Feedback"
                 required
               />
               <label className="form-check-label" for="invalidCheck3">
                 Agree to terms and conditions
               </label>
               <div id="invalidCheck3Feedback" className="invalid-feedback">
                 You must agree before submitting.
               </div>
             </div>
           </div>
           <div className="text-center p-3">
             <button
               className="btn btn-primary "
               onClick={handleSubClick}
               type="submit"

             >
               Submit form
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }

 export default TextForm;

