import './App.css';
import { Routes, Route } from 'react-router-dom';
import Avengers from './Avengers';
import Search from './Search';
import Landing from './Landing';
import PageNoFound from './PageNoFound';



function App() {
  
  return (
    <div className="App">
     <main>
     <Routes>
       <Route path='/' element={<Landing />} exact></Route>
        <Route path="/avengers" element={ <Avengers />}/>
        <Route path="/search" element={ <Search />}/>
        <Route path='*'element={ <PageNoFound />} />
     </Routes>
     </main> 
    </div>

   
  );
}

export default App;
