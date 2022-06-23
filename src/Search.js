import './App.css';
// import './Search.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import GoBack from './GoBack';

const Search = () => {
    const [heroData, setHeroData] = useState([]); 
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
  
      if(userInput) {
         axios({
        baseURL: 'https://gateway.marvel.com/',
        url: 'v1/public/characters',
        method: 'GET',
        params: {
          ts: 'thesoer',
          apikey: 'f6a569770dbc42c8e49153f86a614843',
          hash: '2b386c7f05318a6e66fed6f3416c4b2d',
          nameStartsWith: `${userInput}`,
          limit: 15
        }
      }).then((apiData) => {
  
        setHeroData(apiData.data.data.results)
      })
      }
     
    }, [userInput])

    
    const handleInputChange = (event) => {
      const value = event.target.value;       
      setUserInput(value);
    }

    return (
        <div className='searchContainer' >
          <h1 className='searchTitle' >Search</h1>
          <div className='characterSearch' >
            <label className='sr-only' >Looking for the coolest Super Hero?</label>
            <input
            placeholder='The coolest superhero is...'
            className='characterFinder'
            type="text"
            onChange={(handleInputChange)}
            value={userInput}
            />
    
          {
            userInput && (
              <ul className='cardsCatalogue'>
            {
              heroData.map((hero) => {
                const image = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                return (
                  <li className='cards searchCards' key={hero.id}>
                    <h2 className='title' >{hero.name}</h2>
                    <p className='details' >{hero.description}</p>   
                    <div className='imgContainer'>
                      <img className='characterImg' src={image} alt={`pic of ${hero.name}`}></img>  
                    </div>
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