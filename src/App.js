import './App.css';
import List from './components/List';
import Details from './components/Details';
import { useState } from 'react';

function App() {

  const [clicked, setClicked] = useState({});

  const handleClick = (id,name) => {
    setClicked({id: id, name: name})
  }

  return (
    <div className="App">
      <List onClickUser={handleClick}/>
      <Details info={clicked}/>
    </div>
  );
}

export default App;
