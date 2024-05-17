import { useState } from 'react';
import AdminHeader from '../../components/Admin/Header'
import { Outlet, useNavigate } from "react-router"
const AdminRoot = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet />
    </div>
  )
}

export default AdminRoot