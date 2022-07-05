import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Route,Routes,Router,useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { Main } from './components/Main';
import {NotFound} from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
function App() {
  const [countries,setCountries] = useState([]);
  return (
    <> 
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>} />
            <Route path="country/:name" element={<Details/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Main>
    </>
  );
}

export default App;
