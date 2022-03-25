import * as React from 'react';
import './App.css';
import CardItem from './components/card';
import {data} from './data/data'
import { Navigate, NavigationType, Route, Routes, useNavigate, useNavigationType } from 'react-router-dom';
import CardDetails from './components/cardDetails';
import CardList from './components/cardList';

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<CardList/>}></Route>     
       <Route path='/cardDetail' element={<CardDetails id/>}></Route>
      </Routes>
    </div>
  );
}
export default App;