import "./cards.css";
import bookmarkIcon from "../assets/bookmark.svg";

function Cards({ img, title }) {
  return (
    <div className="card-selection">
      {img ? <img className="cover" src={img} alt="cover" /> : null}
      <img className="bookmark" src={bookmarkIcon} alt="bookmark" />
      {title && <p className="game-title">{title}</p>}
    </div>
  );
}

export default Cards;
