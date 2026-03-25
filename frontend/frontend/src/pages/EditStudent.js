import { useState,useEffect } from "react";
import API from "../api";
import { useParams,useNavigate } from "react-router-dom";

function EditStudent(){

 const {id} = useParams();
 const navigate = useNavigate();

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [course,setCourse] = useState("");

 useEffect(()=>{
   API.get(`students/${id}/`) 
   .then(res=>{
     setName(res.data.name);
     setEmail(res.data.email);
     setCourse(res.data.course);
   });
 },[id]);

 const updateStudent = ()=>{

   API.put(`students/${id}/`,{   // ✅ changed
     name:name,
     email:email,
     course:course
   }).then(()=>{
    //  alert("Student Updated");
     navigate("/students");
   });

 };

 return(

 <div className="container">

 <h2>Edit Student</h2>

 <input
 className="form-control mb-2"
 value={name}
 onChange={(e)=>setName(e.target.value)}
 />

 <input
 className="form-control mb-2"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 />

 <input
 className="form-control mb-2"
 value={course}
 onChange={(e)=>setCourse(e.target.value)}
 />

 <button
 className="btn btn-primary"
 onClick={updateStudent}>
 Update
 </button>

 </div>

 );

}

export default EditStudent;