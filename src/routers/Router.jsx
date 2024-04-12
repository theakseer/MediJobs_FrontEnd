import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Errorpage";
import Home from "../pages/Home";
import { About } from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/jobs", element: <About /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <About /> },
            { path: "/privacy-policy", element: <About /> },

        ],
        errorElement: <ErrorPage />,

    }
])

export default router;