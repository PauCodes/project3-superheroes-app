import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/avengers'>Avengers</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                </ul>
            </nav>      
        </header>
    )
}

export default Landing;