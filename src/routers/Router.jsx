import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Errorpage";
import Home from "../pages/Home";
import { About } from "../pages/About";
import Contact from "../pages/Contact";
import OurPolicy from "../pages/OurPolicy";
import JobApplication from "../pages/JobApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/job/:jobId", element: <JobApplication jobId /> },
            { path: "/contact", element: <Contact /> },
            { path: "/privacy-policy", element: <OurPolicy /> },

        ],
        errorElement: <ErrorPage />,

    }
])

export default router;