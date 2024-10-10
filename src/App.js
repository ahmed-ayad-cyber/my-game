import "./App.css";
import GameList from "./component/game/GameList";
import Nav from "./component/Nav/Nav";

function App() {
  return (
    <>
      <Nav/>
      <div className="container my-5">
        <GameList />
      </div>
    </>
  );
}

export default App;
