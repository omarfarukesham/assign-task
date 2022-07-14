import { Route, Routes } from 'react-router-dom';
import './App.css';
import Canvas from './Components/Canvas';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import RequireAuth from './Components/RequireAuth';
import SignUp from './Components/SignUp';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path="/Canvas" element={
          <RequireAuth>
            <Canvas width={500} height={400} />
          </RequireAuth>
        }>

        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>

  );
}

export default App;
