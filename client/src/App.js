import './App.css';
import Home from './Components/Home.js';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import User from './Components/User.js';
import PhoneAuth from './Components/PhoneAuth';




function App() {
   return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>    
        <Route path='/phoneAuth' element={<PhoneAuth/>} />
        <Route path='/user/:id' element={<User/>} />        
      </Routes>      
      </BrowserRouter>        
    </div>
  );
}

export default App;
