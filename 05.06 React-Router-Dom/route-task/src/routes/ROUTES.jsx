
import AdminRoot from "../pages/AdminSide/AdminRoot";
import Dashboard from "../pages/AdminSide/Dashboard";
import Add from "../pages/AdminSide/Add";
import Countries from "../pages/AdminSide/Countries";
import ClientRoute from "../pages/ClientSide/ClientRoute";
import Home from "../pages/ClientSide/Home";
import CountryDetail from "../pages/ClientSide/CountryDetail";
import Contact from "../pages/ClientSide/Contact";
import About from "../pages/ClientSide/About";
import ClientCountries from "../pages/ClientSide/Countries";
import Message from "../pages/AdminSide/Message";
export const ROUTES=[
    {
        path: '/admin',
        element: <AdminRoot/>,
        children:[
            {
                index:true,
                element: <Dashboard />
            },
            {
                path:'add-country',
                element: <Add />
            },
            {
                path:"countries",
                element: <Countries />
            },
            {
                path:"message",
                element:<Message/>
            },
        ]
    },
    {
        //Client
        path:"",
        element:<ClientRoute/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:'/countries/:id',
                element:<CountryDetail/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/clientcountries',
                element:<ClientCountries/>,
            },
            {
                path:'/about',
                element:<About/>,
            }
        ]
    }
]