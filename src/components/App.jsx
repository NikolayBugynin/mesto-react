import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import { useState } from "react";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="popup-profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          type="text"
          name="username"
          className="popup__input popup__input_type_name"
          id="name-input"
          placeholder="Введите имя"
          minLength={2}
          maxLength={40}
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          type="text"
          name="specification"
          className="popup__input popup__input_type_specification"
          id="specification-input"
          placeholder="Введите информацию о себе"
          minLength={2}
          maxLength={200}
          required
        />
        <span className="popup__input-error specification-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-add"
        title="Новое место"
        button="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          type="text"
          name="placename"
          className="popup__input popup__input_type_title"
          id="placename-input"
          placeholder="Введите название"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="popup__input-error placename-input-error"></span>
        <input
          type="url"
          name="placelink"
          className="popup__input popup__input_type_link"
          id="placelink-input"
          placeholder="Введите ссылку на картинку"
          required
        />
        <span className="popup__input-error placelink-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_type_link"
          id="avatar-input"
          placeholder="Введите ссылку на картинку"
          required
        />
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-delete-card"
        title="Вы уверены?"
        button="Да"></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
