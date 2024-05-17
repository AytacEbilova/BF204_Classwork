import React, { useEffect, useState } from "react";
import StudentRegister from "./TeacherRegister";
import TeacherRegister from "./StudentRegister";

const Register = ({setForm}) => {
  const [register, setRegister] = useState("student");
 
  return (
    <>
      {register === "student" ? (
        <TeacherRegister  setRegister={setRegister} setForm={setForm}  />
      ) : (
        <StudentRegister  setRegister={setRegister}  setForm={setForm}/>
      )}
    </>
  );
};

export default Register;
