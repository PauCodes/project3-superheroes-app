import './Avengers.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import AvengersDisplayPhotos from './AvengersDisplayPhotos';
import GoBack from './GoBack';

const Avengers = () => {

    //call useState hook to hold the array back from my api - destructure variable and function 
    const [charData, setCharData] = useState(null); //expecting an array of objects, so I initialize with null bec it doesn't exist until user selection
    //state to track the changing value of the select dropdown
    // const [selectValue, setSelectValue] = useState('');
     // Character ID -> coming from select
    const [charId, setCharId] = useState('');

    
  
    //once the component has renders, I will run a side effect: fetching data
  
    useEffect(() => {

      if(charId){
        //api call within a useEffect to hold my data
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
        console.log(apiData.data.data.results)
        //store data returned from api in state
        setCharData(apiData.data.data.results)
      })
      }      
    }, [charId])

    //pass this function to form to update state
    //it tahes two arguments: default and selection in anonymous function, so it only runs when called
    // const selectAvengersSelection = (event, selection) => {
    //   event.preventDefault();
    //   console.log('Pick your advenger', selection);

    //   // call state updater funtion and use the selected value to update the avengersSelection state
    //   // setAvengersSelection(selection);

    // }

    //tracking change event on select el and form submission
    const handleChange = (event) => {
      console.log(event.target.value)
      const value = event.target.value;
      setCharId(value);
    }

    return (
        <div className='avengersPage' >
          <h1>Avengers</h1>
          <GoBack />
          <form className='avengersForm' >
            <label>Choose your superhero</label>
            <select className='avengersSelect' onChange={handleChange} value={charId}>
              <option value="" default disabled>Your favourite Avengers is:</option>
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