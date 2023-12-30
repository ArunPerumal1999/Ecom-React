import './App.css';
import { Route, Routes} from 'react-router-dom'
import Shop from'./Pages/Shop/Shop';
import Cartpg from "./Pages/Cart/Cartpg"
import Login from './Component/Login';
import Contact from "./Component/Contact";
import LoginForm from './Component/LoginForm';


function App() {
  return (
    <>
    <div className="App">
     <Routes>
    
      <Route path='/' element={<Shop/>} />
      <Route path='/Carts' element={<Cartpg/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cont" element={<Contact/>}/>
      <Route path="/logfom" element={<LoginForm/>}/>
     </Routes>
     
      
    </div>
    </>
  );
}

export default App;
  