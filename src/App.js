import logo from './logo.svg';
import './App.css';
import Elements from './Elements.js'
import Table from "./Courses.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Elements></Elements>
        <div id = "table">
        <Table></Table>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;



