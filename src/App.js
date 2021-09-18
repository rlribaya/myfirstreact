import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            We're no strangers to love<br/>
            You know the rules and so do I<br/>
            A full commitment's what I'm thinking of<br/>
            You wouldn't get this from any other guy<br/><br/>
            I just wanna tell you how I'm feeling<br/>
            Gotta make you understand<br/><br/>
            Never gonna give you up<br/>
            Never gonna let you down<br/>
            Never gonna run around and desert you<br/>
            Never gonna make you cry<br/>
            Never gonna say goodbye<br/>
            Never gonna tell a lie and hurt you
        </p>
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
