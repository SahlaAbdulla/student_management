import { useEffect,useState } from "react";

import { Link } from "react-router-dom";
import API from "../api";

function StudentList(){

 const [students,setStudents] = useState([]);

 useEffect(()=>{
   loadStudents();
 },[]);

 const loadStudents = ()=>{
   API.get("students/")   // ✅ changed
   .then(res=>{
     setStudents(res.data);
   });
 };

 const deleteStudent = (id)=>{

   API.delete(`students/${id}/`)  
   .then(()=>{
    //  alert("Student Deleted");
     loadStudents();
   });

 };

 return(

 <div className="container">

 <h2 className="mt-4">Student List</h2>

 <table className="table table-bordered">

 <thead className="table-dark">

 <tr>
 <th>ID</th>
 <th>Name</th>
 <th>Email</th>
 <th>Course</th>
 <th>Action</th>
 </tr>

 </thead>

 <tbody>

 {students.map(student=>(
   <tr key={student.id}>

   <td>{student.id}</td>
   <td>{student.name}</td>
   <td>{student.email}</td>
   <td>{student.course}</td>

   <td>

   <Link
   className="btn btn-warning me-2"
   to={`/edit/${student.id}`}>
   Edit
   </Link>

   <button
   className="btn btn-danger"
   onClick={()=>deleteStudent(student.id)}>
   Delete
   </button>

   </td>

   </tr>
 ))}

 </tbody>

 </table>

 </div>

 );

}

export default StudentList;