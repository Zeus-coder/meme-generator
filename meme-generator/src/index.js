import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import '../src/index.css';


function App(){
  return(
    <>
      <Header/>
      <h1>Hello World</h1>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


