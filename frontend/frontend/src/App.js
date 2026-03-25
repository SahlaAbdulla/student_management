import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import EditStudent from "./pages/EditStudent";
import Login from "./pages/Login";

function App(){

 return(

   <BrowserRouter>

     <h1>Student Management</h1>

     <Routes>

       <Route path="/" element={<Login/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/add" element={<AddStudent/>} />
       <Route path="/students" element={<StudentList/>} />
       <Route path="/edit/:id" element={<EditStudent/>} />

     </Routes>

   </BrowserRouter>

 );

}

export default App;