import './App2.css';
import Navbar from './navbar.js'; 
import Card from './cards.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> <strong> CS 230L </strong> </h1>
          <h2> <strong> Section - 001</strong> </h2>
          <p> WVU ID 800382676 </p>
          <p> Hi I am Elizabeth McCaskey </p>
          <Card/>
    </div>
  );
}

export default App;
