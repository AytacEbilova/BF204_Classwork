import React, { useState } from "react";
import StudentRegister from "./TeacherRegister";
import TeacherRegister from "./StudentRegister";

const Register = () => {
  const [register, setRegister] = useState("student");
  return (
    <>
      {register === "student" ? (
        <StudentRegister  setRegister={setRegister} />
      ) : (
        <TeacherRegister  setRegister={setRegister} />
      )}
    </>
  );
};

export default Register;
