import Home from './Home'
import Navbar from './Navbar'
import Technews from './Technews';
import Iosnews from './Iosnews';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nasanews from './Nasanews';

function Routers(){
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <Navbar/>
                    <Home />
                </div>
            )
        },
        {
            path: '/technews',
            element: (
                <div>
                    <Navbar/>
                    <Technews />
                </div>
            )
        },
        {
            path: '/iosnews',
            element: (
                <div>
                    <Navbar/>
                    < Iosnews/>
                </div>
            )
        },
        {
            path: '/nasanews',
            element: (
                <div>
                    <Navbar/>
                    <Nasanews/>
                </div>
            )
        }
    ])


    return(
        <RouterProvider router={router}/>
    )
}
export default Routers