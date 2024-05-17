import AddEmployee from "../pages/Admin/AddEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";
import EditEmployee from "../pages/Admin/EditEmployee";
import AdminEmployees from "../pages/Admin/Employees";
import ClientRoot from "../pages/Client/ClientRoot";
import EmployeeDetail from "../pages/Client/EmployeeDetail";
import ClientEmployees from "../pages/Client/Employees";
import Favourites from "../pages/Client/Favourites";
import Home from "../pages/Client/Home";
import NotFound from "../pages/Client/NotFound";

export const ROUTES=[
    //Admin
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:'',
                element:<AdminEmployees/>,
            },
            {
                path:'add-employee',
                element:<AddEmployee/>,
            },
            {
                path:'edit/:id',
                element:<EditEmployee/>,
            }
         
        ]
    },
    {
        //Client
        path:"",
        element:<ClientRoot/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:'/employees/:id',
                element:<EmployeeDetail/>,
            },
            {
                path:'/favourites',
                element:<Favourites/>,
            },
            {
                path:'employees',
                element:<ClientEmployees/>,
            },
            {
                path:'*',
                element:<NotFound/>
            }
         
        ]
    }
]