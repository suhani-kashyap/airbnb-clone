import './App.css';
import Home from './Home.js';
import Header from './Header.js';

function App() {
  return (
    <div className="app">
     
      <Header />    {/* Header Component will always show, part of App not Home */}

      {/* Home */}
      <Home />
          {/* Banner */}
            {/* Search Date */}

          {/* Cards */}
          
          {/* Footer */}
    </div>
  );
}

export default App;
