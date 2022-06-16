import './App.css';
import { useState } from 'react'; 
import Avengers from './Avengers';
import Search from './Search';



function App() {
  
  const [landing, setLanding] = useState(true);
  const [avengers, setAvengers] = useState(false);
  const [search, setSearch] = useState(false);

  

  const handleAvengersClick = () => {
    console.log('avengers clicked')
  
  }

  const handleSearchClick = () => {
    console.log('search clicked')

  }

  const handleGoBackClick = () => {
    console.log('go back clicked')
  }
  
  return (
    <div className="App">
          <button onClick={handleAvengersClick}>Avengers</button>
          <button onClick={handleSearchClick}>Search</button>
          <Avengers goBack={handleGoBackClick}/>
          <Search goBack={handleGoBackClick}/>
      
    
    </div>
  );
}

export default App;
