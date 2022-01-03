import './App.css';
import React, {useState} from 'react';

function App() {
  const[count] = useState(0);
  return (
    <div className="container">
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter App</h1>
          <div className='my-5'>
            <h1 className='my-5'>{count}</h1>
            <button className='btn btn-success mx-3'>Increment</button>
            <button className='btn btn-danger mx-3'>Decrement</button>
            <button className='btn btn-secondary mx-3'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
