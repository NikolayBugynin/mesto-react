import { api } from "../utils/Api.js";

import { useEffect, useState } from "react";

import Card from "./Card.jsx";

export default function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        cardsData.forEach((card) => {
          card.idMy = userData._id;
        });

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cardsData);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  }, []);

  return (
    <div className="Main">
      <main className="content">
        <section className="profile">
          <button
            onClick={onEditAvatar}
            type="button"
            aria-label="Редактировать"
            className="profile__edit-avatar-button button">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </button>

          <div className="profile__info">
            <div className="profile__heading">
              <h1 className="profile__title">{userName}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                aria-label="Редактировать"
                className="profile__edit-button button"></button>
            </div>
            <p className="profile__specification">{userDescription}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            aria-label="Добавить"
            className="profile__add-button button"></button>
        </section>
        <section className="elements">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}
