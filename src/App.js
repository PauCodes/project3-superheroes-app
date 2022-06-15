import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import Landing from './Landing';

function App() {
  console.log('component has rendered!');

  //call useState hook to hold the array back from my api - destructure variable and function 
  const [superHeroPics, setSuperHeroPics] = useState([]); //expecting an array of objects, so I initialize with empty one
  

  //once the component has renders, I will run a side effect: fetching data

  useEffect(() => {
    //api call within a useEffect to hold my data
    axios({
      baseURL: 'http://gateway.marvel.com/',
      url: 'v1/public/characters',
      method: 'GET',
      params: {
        ts: 'thesoer',
        apikey: 'f6a569770dbc42c8e49153f86a614843',
        hash: '2b386c7f05318a6e66fed6f3416c4b2d',
        nameStartsWith: 'sp', //update/link this according to user's choice
        limit: 20,  
      }
    }).then((apiData) => {
      console.log(apiData.data.data.results);

      //store data returned from api in state
      setSuperHeroPics(apiData.data.data.results)
    })
  }, [])
  
  

  return (
    <div className="App">
     <Landing />
    </div>
  );
}

export default App;
