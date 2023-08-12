export default function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article className="element">
      <div className="element__card">
        <button
          type="button"
          aria-label="Удалить"
          className="element__delete-button button"></button>
        <img
          src={card.link}
          alt={card.name}
          onClick={handleClick}
          className="element__image"
        />
      </div>
      <div className="element__subline">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likescontainer">
          <button
            type="button"
            aria-label="Нравится"
            className="element__like-button button"></button>
          <span className="element__like-score">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
