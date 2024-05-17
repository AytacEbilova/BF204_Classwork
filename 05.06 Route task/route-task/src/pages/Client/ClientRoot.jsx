import { Outlet } from "react-router"
import ClientHeader from "../../components/Client/Header"
import ClientFooter from "../../components/Client/Footer"
const ClientRoot = () => {
  return (
    <div>
        
       <ClientHeader/>
        <Outlet/>
        <ClientFooter/>
    </div>
  )
}

export default ClientRoot