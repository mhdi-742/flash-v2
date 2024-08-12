import logo from './logo.svg';
import './App.css';
import {Routes,Route, useParams } from 'react-router-dom';
import Navbar from './pages/navbar';
import Signin from './pages/Admin'
import Home from './pages/Home';
import Dashbord from './pages/Dashbord';
import Create from './pages/create';
import Update from './pages/update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/update/:id" element={<Update/>} ></Route>
        <Route path='*' element={<div>error 404 </div> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
