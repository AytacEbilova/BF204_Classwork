import React, { useState } from 'react'
import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage'

const MainPage = ({userRole}) => {

  return (
    <div>
         {userRole === 'student' ? <StudentPage /> : <TeacherPage />}
    </div>
  )
}

export default MainPage