import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>

        <Header />    
        
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer /> 
       
      </Router>
    </div>
  );
}

export default App;
