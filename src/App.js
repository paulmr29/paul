import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';

function App() {
    return ( 
        <div className = "App"> NSP 
        <Navbar />
        <header className = "App-header" >
        <img src = { logo } className = "App-logo" alt = "logo" />
        <p>Mi primera tienda 
        </p> 
        <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" > Coder </a>    
        </header>    
        </div>
    );
}

export default App;