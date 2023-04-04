import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";

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
