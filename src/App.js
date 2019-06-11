import React from 'react';
import './App.css';
import './components/ScoreSheet/ScoreSheet.css';
import ScoreSheet from './components/ScoreSheet/ScoreSheet.js';

function App() {


  var ps = [
    ['张三', '李四', 0, 2, 1],
    ['张三', '王五', 0, 2, 2],
    ['王五', '李四', 2, 0, 3]
  ];
  var namedict = {
    '张三': 1,
    '李四': 2,
    '王五': 3
  };

  return (
    <div className="App">
      <ScoreSheet ps={ps} namedict={namedict}/>
    </div>
  );
}

export default App;
