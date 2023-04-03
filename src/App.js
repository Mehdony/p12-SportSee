import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routing from './routing/Routing';
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routing />
    </BrowserRouter>
  );
}

export default App;
