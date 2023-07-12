
import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RawPost/RowPost';
import { originals,action } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action}  title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
