import About from "../pages/About";
import Add from "../pages/Add";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Specialties from "../pages/Specialties";
import MainRoot from "../pages/mainRoot"

export const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'menu',
                element:<Menu/>
            },
            {
                path:'add',
                element:<Add/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'reservation',
                element:<Reservation/>
            },
            {
                path:'special',
                element:<Specialties/>
            },
            {
                path:'about',
                element:<About/>
            }
        ]
    }
]