import './App.css';
import { lazy, useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './routers/MainPage';
import FootList from './routers/FootList';
import NavList from './routers/NavList';



const AddItem = lazy(() => import('./routers/AddItem.js'));
const ServiceCenter = lazy(() => import('./routers/ServiceCenter.js'));


function App() {

  

  return (
    <div >
      <NavList/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/AddItem' element={<AddItem />} />
        <Route path='/Center' element={<ServiceCenter/>} />
        <Route path='*' element={<div>404 Error 404 Error 404 Error 404 Error 404 Error</div>} />        
      </Routes>
      <FootList/>
    </div>

  );



}


export default App;
