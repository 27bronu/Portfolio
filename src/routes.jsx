import { createBrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact"; 
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "Portfolio/about", 
                element: <About />
            },
            {
                path: "Portfolio/projects", 
                element: <Projects />
            },
            {
                path: "Portfolio/contact", 
                element: <Contact />
            },
            {
                path: "*", 
                element: <ErrorPage />
            }
        ]
    },
  
    {
        path: "/Portfolio",
        element: <Navigate to="/" replace />
    },
]);
