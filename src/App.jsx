import "./App.css";
import Index from "./components/pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Index/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
