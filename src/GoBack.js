import './App.css';
import { Link } from 'react-router-dom';

const GoBack = () => {
    
    return ( 
        <Link className='gobackbtn' to="/">Go Back!</Link>
    )
}

export default GoBack;