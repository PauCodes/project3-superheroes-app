import './Search.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import GoBack from './GoBack';

const Search = () => {

    //call useState hook to hold the array back from my api - destructure variable and function 
    const [heroData, setHeroData] = useState([]); //expecting an array of objects, so I initialize with empty one
    //character name coming from user input
    const [userInput, setUserInput] = useState('');

    // const [valueOnChange, setValueOnChange] = useState('');
    
  
    //once the component has renders, I will run a side effect: fetching data
  
    useEffect(() => {
      //api call within a useEffect to hold my data
      if(userInput) {
         axios({
        baseURL: 'http://gateway.marvel.com/',
        url: 'v1/public/characters',
        method: 'GET',
        params: {
          ts: 'thesoer',
          apikey: 'f6a569770dbc42c8e49153f86a614843',
          hash: '2b386c7f05318a6e66fed6f3416c4b2d',
          nameStartsWith: `${userInput}`,
          limit: 20
        }
      }).then((apiData) => {
  
        //store data returned from api in state
        setHeroData(apiData.data.data.results)
      })
      }
     
    }, [userInput])

    //this event will handle the user typing in the input
  //when the user types in the input box: 
    const handleInputChange = (event) => {
      const value = event.target.value;       
      setUserInput(value);
    }

    return (
        <div className='searchContainer' >
          <h1>Search</h1>
          <div className='characterSearch' >
          {/* <form action='submit' onSubmit={handleSubmit}> */}
            <label>Looking for the coolest Super Hero?</label>
            <input
            className='characterFinder'
            type="text"
            onChange={(handleInputChange)}
            value={userInput}
            />
            {/* <button type="submit">submit</button> */}
          {/* </form> */}
          {
            userInput && (
              <ul>
            {
              heroData.map((hero) => {
                const image = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                return (
                  <li key={hero.id}>
                    <h2>{hero.name}</h2>
                    <p>{hero.description}</p>
                    <img src={image} alt={`pic of ${hero.name}`}></img>
                    
                  </li>
                )
              })
            }
          </ul>
            )
          }
          
          <GoBack />
          </div>
        </div>
    )
}

export default Search;