import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import CopyRight from "./components/layouts/CopyRight";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="pt-20 md:pt-0">
        <Outlet />
      </div>
      <footer id="footer" className="pt-5">
        <CopyRight />
      </footer>
    </>
  );
}

export default App;
