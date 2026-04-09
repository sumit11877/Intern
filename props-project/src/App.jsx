const ScoreCard = (props) => {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Score: {props.score}</p>
      <p>address: {props.address}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App1">
      <h1>Student Score Cards</h1>
      <ScoreCard name="kushal" score={85} address="123 Main St" />
      <ScoreCard name="asbin" score={92} address="456 Elm St" />
      <ScoreCard name="jordan" score={78} address="789 Oak St" />
    </div>
  );
}
export default App



