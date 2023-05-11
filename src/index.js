import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**

Render the App component in the root element using React.StrictMode.
@function
@global
@returns {void}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

