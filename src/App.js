import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ContactUs from "./Pages/ContactUsPage/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
