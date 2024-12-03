import './App.css';

function ChessBoard({ size }) {
  const rows = Array.from({ length: size }, (_, i) => i);
  const cols = Array.from({ length: size }, (_, i) => i);
  console.log('Hello From Chessboard');
  return (
    <div className="chessboard">
      {rows.map((row) => (
        <div>
          {cols.map((col) => (
            <div
              className={`square ${(row + col) % 2 === 0 ? 'white' : 'black'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChessBoard;
