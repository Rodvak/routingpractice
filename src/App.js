import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

const Home = () => {
  return (
    
    <span>Welcome</span>
  )
}

const Number = () => {
  const {number} = useParams();
  return (

    <span>The number is: {number}</span>
  )
}

const Word = () => {
  const {word, color, background} = useParams();
  return (
    
    <div>
      <span style={{ color: color, backgroundColor: background}}>The number is: {word}</span>
    </div>
  )
}


  return (

    
    <div className="App">
      <BrowserRouter>
      
        <Routes>

          <Route path='/home' element={ <Home/> } />
          <Route path='/:number' element={ <Number/> } />
          <Route path='/:word/:color/:background' element={ <Word/> } />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
