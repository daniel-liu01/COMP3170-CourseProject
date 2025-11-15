import "./cards.css";
import bookmarkIcon from "../assets/bookmark.svg";

function Cards({ img, title, publisher }) {
  return (
    <div className="card-selection">
      <div className="img-wrapper">
        {img && <img className="cover" src={img} alt="cover" />}
        <div className="img-gradient"></div>

        <div className="info-box">
          {title && <p className="game-title">{title}</p>}
          {publisher && <p className="dev-name">{publisher}</p>}
        </div>
      </div>

      <img className="bookmark" src={bookmarkIcon} alt="bookmark" />
    </div>
  );
}

export default Cards;
