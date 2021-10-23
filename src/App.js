import logo from './logo.svg';
            // ./ means within the same folder
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet></Greet>
        <Button/>
        <div className="red-circle"></div>
        <div className="blue-circle"></div>
        <div className="green-circle"></div>
        <div className="yellow-circle"></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
