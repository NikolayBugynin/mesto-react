export default function PopupWithForm({
  name,
  title,
  button,
  onClose,
  children,
  isOpen,
}) {
  return (
    <div className="PopupWithForm">
      <div
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__content">
          <button
            type="button"
            className="popup__close-button button"
            onClick={onClose}></button>

          <h2 className="popup__tittle">{title}</h2>

          <form
            className={`popup__form popup__form_${name}`}
            name={name}
            noValidate>
            {children}

            <button disabled type="submit" className="popup__button button">
              {button}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
