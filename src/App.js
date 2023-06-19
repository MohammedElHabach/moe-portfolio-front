import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/LoginPage/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardProjects from "./Pages/Dashboard/DashboardProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path:"/dashboard",
    element:<Login/>,
  },
  {
    path:"/dashboard/admin",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard/admin/projects",
        element:<DashboardProjects/>
      }
    ]
  }
 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
