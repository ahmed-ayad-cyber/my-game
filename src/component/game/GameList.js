import { useState } from "react";
import { GameData } from "./GameData";


export default function GameList() {
  const [Games, setGames] = useState(GameData);
  const deleteHandeller = (e)=>{
    
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Games.map((game, index) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={game.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <p className="card-text">{game.description}</p>
                  <button onClick={(e)=>{deleteHandeller()}}>delet</button>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary me-3">
                    buy now
                  </button>
                  <small className="text-body-secondary">
                    Price : {game.price} $
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
