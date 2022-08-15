let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
 
let popup = document.querySelector('.popup');
let popupField = popup.querySelector('.popup__field');
// let popupSubmitButton = popup.querySelector('.popup__submit');
let popupForm = popup.querySelector('.popup__form');
let popupCloseButton = popup.querySelector('.popup__close-button');

function show_popup () {
    let name = profile.querySelector('.profile__name');
    let status = profile.querySelector('.profile__status');
    let popupName = popup.querySelector('#popup__field-name');
    let popupStatus = popup.querySelector('#popup__field-status');
    popupName.value = name.textContent;
    popupStatus.value = status.textContent;
    popup.classList.add('popup_opened');
}

function close_popup () {
    popup.classList.remove('popup_opened');
}

function edit_profile (evt) {
    evt.preventDefault()
    let name = profile.querySelector('.profile__name');
    let status = profile.querySelector('.profile__status');
    let popupName = popup.querySelector('#popup__field-name');
    let popupStatus = popup.querySelector('#popup__field-status');
    name.textContent = popupName.value;
    status.textContent = popupStatus.value;
    close_popup();
}

profileEditButton.addEventListener('click', show_popup);

popupCloseButton.addEventListener('click', close_popup);

popupForm.addEventListener('submit', edit_profile);

// popupSubmitButton.addEventListener('click', edit_profile);
