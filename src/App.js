import logo from './logo.svg';
            // ./ means within the same folder
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';
import Employee from './components/Employee';
import Hello from './components/Hello';

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
        <p>{Hello()}</p>
        <Employee/>
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
        <br/>
        <a href="https://rlribaya.github.io/RandomMathQuestions/">
        <h1>TRY RANDOM MATH QUESTIONS</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
