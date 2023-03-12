import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Meme from './components/Meme';
import '../src/index.css';


function App(){
  // const [data, setData]  = React.useState(0)
  // console.log(data)

  // function incrementBtn(){
  //   setData( prevCount => prevCount + 1)
  // }
  // function decrementBtn(){
  //   setData(prevCount => prevCount -1 )

  // }
  return(
    <>
      <Header/>
      <Meme/>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



