import React, { useState } from 'react'
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';

const Login = () => {
    const [login, setLogin] = useState("student");
  return (
    <div>
         <>{login === "student" ? <StudentLogin login={login} setLogin={setLogin}/> : <TeacherLogin login={login} setLogin={setLogin}/>}</>
    </div>
  )
}

export default Login