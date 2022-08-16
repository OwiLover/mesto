let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let names = profile.querySelector('.profile__name');
let statuses = profile.querySelector('.profile__status');
 
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupName = popup.querySelector('#popup__field-name');
let popupStatus = popup.querySelector('#popup__field-status');
let popupCloseButton = popup.querySelector('.popup__close-button');


function showPopup () {
    popupName.value = names.textContent;
    popupStatus.value = statuses.textContent;
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function editProfile (evt) {
    evt.preventDefault()
    names.textContent = popupName.value;
    statuses.textContent = popupStatus.value;
    closePopup();
}

profileEditButton.addEventListener('click', showPopup);

popupCloseButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', editProfile);