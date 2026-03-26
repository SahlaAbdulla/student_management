import { useEffect, useState } from "react";
import API from "../api";

function StudentList(){

  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.get("students/")
      .then(res => {
        console.log("DATA:", res.data);

        // 🔥 FIX HERE
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setStudents(data);
      });
  }, []);

  return (
    <div className="container">

      <h2>Students</h2>

      {students.map((s) => (
        <div key={s.id}>
          {s.name} - {s.email} - {s.course}
        </div>
      ))}

    </div>
  );
}

export default StudentList;