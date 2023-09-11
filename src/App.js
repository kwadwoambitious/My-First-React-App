<<<<<<< HEAD
import './App.css';

const App  = () => {
  const name = "John!";
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "Someone!"}</h1>
    </div>
  )
}

export default App;
=======
import React from 'react';
import './App.css';
import YoutubeChannel from './YoutubeChannel';

const App = () => {
  return (
        <div className="App">
          <YoutubeChannel />
        </div>
  );
}

export default App;
>>>>>>> 3e5ea34 (First Commit)
