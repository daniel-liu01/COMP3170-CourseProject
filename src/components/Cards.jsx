import { Link } from "react-router-dom";
import "./cards.css";
import SaveGameButton from "./SaveGameButton";

function Cards({ id, img, title, publisher }) {
  return (
    <Link
      to={`/game/${id}`}
      className="card-selection"
      aria-label={`View details for ${title}`}
    >
      <div className="img-wrapper">
        {img && <img className="cover" src={img} alt="cover" />}
        <div className="img-gradient"></div>

        <div className="info-box">
          {title && <p className="game-title">{title}</p>}
          {publisher && <p className="dev-name">{publisher}</p>}
        </div>
      </div>

      <SaveGameButton
        game={{
          id,
          name: title,
          publisher,
          background_image: img,
        }}
      />
    </Link>
  );
}

export default Cards;
