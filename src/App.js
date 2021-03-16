import logo from './logo.svg';
import './App.css';
import { ApsDatePicker } from './library/DatePicker/DatePicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my-app-2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ApsDatePicker />
      </header>
    </div>
  );
}

export default App;
