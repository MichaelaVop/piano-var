import './App.css';
import Keys from './components/Keys';
import Header from './components/Header';


function App() {

  
  return (
   
    <div className="App">
      <Header />
   
      <div className='piano'>
        <Keys />
      </div>
    </div>
   
  );
}

export default App;
