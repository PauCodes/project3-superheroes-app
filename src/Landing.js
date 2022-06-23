import './App.css';
// import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <header className='landing'>
            <div className="hulkBg"></div>
            <div className="wolverineBg"></div>
            <div className='mainHeader'>
                <Link className='mainBtn' to='/avengers'>Avengers Characters</Link>
                <Link className='mainBtn' to='/search'>Search Characters</Link>
            </div>   
        </header>
    )
}

export default Landing;