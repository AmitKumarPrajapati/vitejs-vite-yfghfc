import React from 'react';
import TodoList from './TodoList';
import ChessBoard from './ChessBoard';
import FetchData from './FetchData';

function App({ size }) {
  return (
    <>
      {/* <ChessBoard size={size} /> */}
      {/* <TodoList /> */}
      <FetchData />
    </>
  );
}

export default App;
