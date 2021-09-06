// sign in & sign up
const signInBtns = document.querySelectorAll(".btn__sign-in");
const signUpBtns = document.querySelectorAll(".btn__sign-up");
const reloadBtns = document.querySelectorAll(".btn-reload");
const modalLog = document.querySelector(".modal-form-n");
const modalLogIn = document.querySelector(".form-sign-in");
const modalLogUp = document.querySelector(".form-sign-up");
const modalOverlay = document.querySelector(".modal-form__overlay")


function openLogInModal () {
    modalLog.classList.add("open")
    modalLogIn.classList.add("open")
    modalLogUp.classList.remove("open")
}

function openLogUpModal () {
    modalLog.classList.add("open")
    modalLogIn.classList.remove("open")
    modalLogUp.classList.add("open")
}

function closeModal () {
    modalLog.classList.remove("open")
}

for (const signInBtn of signInBtns) {
    signInBtn.addEventListener('click',openLogInModal)
}

for (const signUpBtn of signUpBtns) {
    signUpBtn.addEventListener('click',openLogUpModal)
}

for (const reloadBtn of reloadBtns) {
    reloadBtn.addEventListener('click',closeModal)
}

modalOverlay.addEventListener('click',closeModal)
