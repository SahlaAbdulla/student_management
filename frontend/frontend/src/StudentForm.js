import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../src/api";

function StudentForm(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [course,setCourse] = useState("");

 const navigate = useNavigate();

 const submitStudent = async () => {

   await API.post("students/",{
     name,
     email,
     course
   });

   navigate("/students");
   window.location.reload(); // optional but useful
 };

 return(

   <div>

     <h2>Add Student</h2>

     <input
     placeholder="Name"
     onChange={(e)=>setName(e.target.value)}
     />

     <br/><br/>

     <input
     placeholder="Email"
     onChange={(e)=>setEmail(e.target.value)}
     />

     <br/><br/>

     <input
     placeholder="Course"
     onChange={(e)=>setCourse(e.target.value)}
     />

     <br/><br/>

     <button onClick={submitStudent}>Submit</button>

   </div>

 );

}

export default StudentForm;