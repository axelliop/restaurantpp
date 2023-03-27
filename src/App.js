import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailApp from './components/DetailApp';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

function App() {



  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
         </div>
       <Routes>
       <Route path='/' element={<LandingPage/>}/>
        <Route path='/detail/:menuId' element={<DetailApp/>}/>
       </Routes>
 
    </BrowserRouter>
  );
}

export default App;
