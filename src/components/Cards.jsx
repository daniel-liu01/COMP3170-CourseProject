import "./Cards.css";

function Cards({ img }) {
  return (
    <div className="card-selection">
      {img ? <img className="cover" src={img} alt="cover" /> : null}
      <img className="bookmark" src="/icons8-bookmark.svg" alt="bookmark" />
    </div>
  );
}

export default Cards;