import './App.css';
import { useState } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import Avengers from './Avengers';
import Search from './Search';
import GoBack from './GoBack';



function App() {
  
  const [landing, setLanding] = useState(true);
  const [avengers, setAvengers] = useState(false);
  const [search, setSearch] = useState(false);

  // the useNavigate Hook returns the navigate function
  const navigate = useNavigate();


  const handleAvengersClick = () => {
    console.log('avengers clicked')
    if(landing){
      navigate('/avengers');
    }
    setLanding(!landing);
    setAvengers(!avengers)
  
  }

  const handleSearchClick = () => {
    console.log('search clicked')
    if(landing){
      navigate('/search');
    }
    setLanding(!landing);
    setSearch(!search);

  }

  const handleGoBackClick = () => {
    console.log('go back clicked')
    if(avengers){
      navigate('/');
    }
    setAvengers(!avengers);
    // setLanding(!landing)

  }
  
  return (
    <div className="App">


       <Routes>
            <Route 
              path="/" 
              element=
              {  
                <>
                <button onClick={handleAvengersClick}>Avengers</button>
                 {
                    avengers ? <Avengers goBack={handleGoBackClick}/> : null
                 }

                <button onClick={handleSearchClick}>Search</button> 
                  {
                    search ? <Search goBack={handleGoBackClick}/> : null
                  }
                </>
              } 
            />

            <Route path="/avengers" element={ <Avengers />}/>
            <Route path="/search" element={ <Search />}/>
      
      </Routes>
    
    </div>

   
  );
}

export default App;
