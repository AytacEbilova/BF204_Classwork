import { Outlet } from "react-router"
import Header from "../../components/Admin/Header"
import AdminFooter from "../../components/Admin/Footer"

const AdminRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <AdminFooter/>
    </div>
  )
}

export default AdminRoot