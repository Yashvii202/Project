import logo from './logo.svg';
import './App.css';
import Layout from './componants/Layout';
import Header from './componants/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componants/Home';
import Shop from './componants/Shop';
import Detail from './componants/Detail';
import Add from './componants/Add';
import Edit from './componants/Edit';
import About from './componants/About';

function App() {
  return (
    <>
    <div className='container-fluid'>
    <BrowserRouter>
    <div>
    <Header/>
    </div>
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<Detail/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    
    </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
