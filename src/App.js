import { Route, Routes } from 'react-router-dom';
import './App.css';
import Canvas from './Components/Canvas';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Canvas' element={<Canvas width={500} height={400} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>

  );
}

export default App;
