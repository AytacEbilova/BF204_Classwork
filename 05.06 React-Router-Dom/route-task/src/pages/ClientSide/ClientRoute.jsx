import { Outlet } from "react-router"
import ClientHeader from "../../components/Client/Header";
const ClientRoute = () => {
  return (
    <div>
        <ClientHeader/>
        <Outlet/>
    </div>
  )
}

export default ClientRoute