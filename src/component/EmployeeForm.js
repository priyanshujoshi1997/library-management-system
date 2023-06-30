import React, {useState, useEffect } from 'react'

  let myStyle={
    color: "white",
    backgroundColor:"black",
 
 }
function validateForm(prm_employee,prm_designation){
  return true;
}

 function EmployeeForm(props) {
   const handleSubClick = (event) => {
     event.preventDefault();
     let b = validateForm(employee_name,designation)
     if(b){
       event.preventDefault();
       const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: employee_name,
            designation: designation,
          }),
       };
       fetch("http://localhost:9090/employees", requestOptions)
         .then((response) => response.json())
         .then((data)=> {
          alert("Employee added succussfully");
         });
     }
   };

   const handleOnChange = (event) => {
     console.log(event.target.value);
     setEmployee_name(event.target.value);
   };
   const handleOnDesChange = (event) => {
     setDesignation(event.target.value);
   };
 

   const [employee_name, setEmployee_name] = useState("");
   const [designation, setDesignation] = useState("");
  

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
              Employee Name
             </label>
             <input
               type="text"
               className="form-control align-items-center"
               id="name"
               placeholder="username"
               value={employee_name}
               onChange={handleOnChange}
             />
           </div>
           <div className="mb-3 w-50 mx-auto">
             <label for="staticEmail" className="form-label">
               Designation
             </label>
             <input
               type="text"
               readonly
               className="form-control"
               value={designation}
               onChange={handleOnDesChange}
             />
           </div>
           <div className="text-center p-3">
             <button
               className="btn btn-primary "
               onClick={handleSubClick}
               type="submit"

             >
              Add Employee
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }

 export default EmployeeForm;