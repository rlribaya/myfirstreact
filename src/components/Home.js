import logo from '../logo.svg';
            // ./ means within the same folder
import '../App.css';
import Greet from './Greet';
import Button from './Button';
import Employee from './Employee';
import Hello from './Hello';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="App" id="outer-div">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p id="Hello">{Hello()}</p>
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
        <br/>
      </header>
    </div>
  );
}

export default Home;
