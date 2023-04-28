import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";

/**
 * Main component of the application.
 * @returns {JSX.Element} The main component JSX element.
 */

function App() {
   
  return (
    <BrowserRouter>
      <NavBar />
      <section className="mainContainer">
        <SideBar />
        <Routing />
      </section>
    </BrowserRouter>
  );
}

export default App;
