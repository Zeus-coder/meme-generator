import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Meme from './components/Meme';
import '../src/index.css';


function App(){
  return(
    <>
      <Header/>
      <Meme/>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



