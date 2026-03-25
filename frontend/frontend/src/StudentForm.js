import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentForm(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [course,setCourse] = useState("");

 const navigate = useNavigate();

 const submitStudent = async () => {

   await axios.post("http://127.0.0.1:8000/api/students/",{
     name:name,
     email:email,
     course:course
   });

  //  alert("Student Added");

   navigate("/students");   // 👈 redirect to student list

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