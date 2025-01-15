import App from "@/App";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[
            {
                index:true,
                element: <Tasks></Tasks>
            }
        ]
    }
])
export default routes;