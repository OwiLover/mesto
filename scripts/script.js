let profile = document.querySelector('.profile');
let popup = document.querySelector('.pop-up');
 

let profile_edit_button = profile.querySelector('.profile__edit-button');

function show_popup () {
    let popup_fields = popup.querySelectorAll('.pop-up__field');
    let name = profile.querySelector('.profile__name');
    let status = profile.querySelector('.profile__status');
    let popup_name = popup_fields[0];
    let popup_status = popup_fields[1];
    popup_name.value = name.textContent;
    popup_status.value = status.textContent;
    popup.classList.add('pop-up_visible');
}

profile_edit_button.addEventListener('click', show_popup);


let popup_close_button = popup.querySelector('.pop-up__close-button');

function close_popup () {
    popup.classList.remove('pop-up_visible');
}

popup_close_button.addEventListener('click', close_popup);


let popup_submit_button = popup.querySelector('.pop-up__submit');

function edit_profile () {
    let popup_fields = popup.querySelectorAll('.pop-up__field');
    let profile_info = profile.querySelector('.profile__info');
    let name = profile.querySelector('.profile__name');
    let status = profile.querySelector('.profile__status');
    let popup_name = popup_fields[0];
    let popup_status = popup_fields[1];
    name.textContent = popup_name.value;
    status.textContent = popup_status.value;
    // profile_info.innerHTML = `
    // <h1 class="profile__name">${popup_name.value}<button class="profile__edit-button"></button></h1>
    // <p class="profile__status">${popup_status.value}</p>
    // `;
    popup.classList.remove('pop-up_visible');
}

popup_submit_button.addEventListener('click', edit_profile);
