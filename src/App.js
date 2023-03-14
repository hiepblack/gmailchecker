import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ListCard from './components/card/ListCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Home/>
      </div>
      <div className='card__container'>
        <ListCard/>
      </div>
    </div>
  );
}

export default App;
