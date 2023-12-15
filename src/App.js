

import './App.css';
import HomePage from './components/cart/HomePage';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header/>
      {/* <HomePage/> */}
      <div>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
