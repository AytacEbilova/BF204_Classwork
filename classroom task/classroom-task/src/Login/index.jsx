import React, { useState } from "react";
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";

const Login = ({ setForm, setMain, setUserRole }) => {
  const [login, setLogin] = useState("student");

  return (
    <div>
      <>
        {login === "student" ? (
          <StudentLogin
            login={login}
            setLogin={setLogin}
            setForm={setForm}
            setMain={setMain}
            setUserRole={setUserRole}
          />
        ) : (
          <TeacherLogin
            login={login}
            setLogin={setLogin}
            setForm={setForm}
            setMain={setMain}
            setUserRole={setUserRole}
          />
        )}
      </>
    </div>
  );
};

export default Login;
