import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  console.log('component has rendered!');
  

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
       
      }
    }).then((data) => {
      console.log(data.data.data.results);
      

    })
  })
  
  

  return (
    <div className="App">
      <header>
        <h1>If I were a superheroe...</h1>
      </header>
    </div>
  );
}

export default App;
