import './Avengers.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import AvengersDisplayPhotos from './AvengersDisplayPhotos';
import GoBack from './GoBack';

const Avengers = () => {

    const [charData, setCharData] = useState(null); 
    const [charId, setCharId] = useState('');

  
    useEffect(() => {

      if(charId){
    
      axios({
        baseURL: 'https://gateway.marvel.com/',
        url: `v1/public/characters/${charId}`,
        method: 'GET',
        params: {
          ts: 'thesoer',
          apikey: 'f6a569770dbc42c8e49153f86a614843',
          hash: '2b386c7f05318a6e66fed6f3416c4b2d',
        }
      }).then((apiData) => {
    
        setCharData(apiData.data.data.results)
      })
      }      
    }, [charId])


   
    const handleChange = (event) => {
      const value = event.target.value;
      setCharId(value);
    }

    return (
        <div className='avengersPage' >
          <h1>Avengers</h1>
          <GoBack />
          <form className='avengersForm' >
            <label className='sr-only' >Choose your superhero</label>
            <select className='avengersSelect' onChange={handleChange} value={charId}>
              <option value="" default disabled>Your favourite character is:</option>
              <option value="1009368">Iron Man</option>
              <option value="1009220">Captain America</option>
              <option value="1009664">Thor</option>
              <option value="1009351">Hulk</option>
              <option value="1011010">Spider Man</option>
              <option value="1010911">Black Widow</option>
              <option value="1011130">Black Panther</option>
            </select>
          </form> 
          {
            charData && <AvengersDisplayPhotos details={charData} />
          }          
          
        </div>

    )
}

export default Avengers;