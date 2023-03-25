import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Checkout from "../../pages/Checkout/Checkout";
import Home from '../../pages/Home/Home';
import Login from "../../pages/Login/Login";
import Order from "../../pages/Orders/Order";
import Services from "../../pages/Service/Services";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/flights/:ID',
                element: <Services></Services>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/checkout/:id',
                element: <Checkout></Checkout>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
                
            },
            {
                path:'/orders',
                element: <Order></Order>
                
            }
        ]
    }
])
export default router;