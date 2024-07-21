import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './Component/Mainpage';
import Login from './Component/Login';
import Userone from './Component/Userone';
import Usertwo from './Component/Usertwo';
import Userthree from './Component/Userthree';
import Userfour from './Component/Userfour';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Mainpage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/userone' element={<Userone/>}/>
  <Route path='/usertwo' element={<Usertwo/>}/>
  <Route path='/userthree' element={<Userthree/>}/>
  <Route path='/userfour' element={<Userfour/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
