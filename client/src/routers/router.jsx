import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import About from "../pages/About";
import PrivateRoutes from "../components/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/", element: <App />,

    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/sign-Up",
        element: <SignUp/>
      },

      {
        path: "/profile",
        element: <PrivateRoutes><Profile/></PrivateRoutes>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
]);

export default router;

// All pages are rendered here.
// we are importing createBrowserRouter and inside it we will have routers,
// Then we will export it because we need to use it in main.jsx.
// Then use routerProvider in mainjsx
// <div class="text-8xl font-bold underline">Hello world!</div>
// pass children route using array of object methods
// If we visit the about path or any other path, then home (by default which is path of Outlet) 
// gets replaced by the new path being visited