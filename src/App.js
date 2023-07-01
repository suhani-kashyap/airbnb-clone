import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
     
      <Header />    {/* Header Component will always show, part of App not Home */}
      <Home />
      <Footer /> {/* Footer Component will always show, part of App not Home */}
          
    </div>
  );
}

export default App;
