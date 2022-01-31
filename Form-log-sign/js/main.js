const log_btn = document.querySelector(".log-in-btn");
const log_link = document.querySelector(".log-link");
const sign_btn = document.querySelector(".sign-up-btn");
const sign_link = document.querySelector(".sign-link");
const firstSlide = document.querySelector(".first-slide");
const log_container = document.querySelector(".log-in-container");
const sign_constainer = document.querySelector(".sign-up-container");
const meta_container = document.querySelector(".meta-container");
const logback = document.querySelector(".log-back");
const signback = document.querySelector(".sign-back");

log_btn.addEventListener("click", () => {
    firstSlide.style.width = 0;
    firstSlide.style.height = 0;
    firstSlide.style.overflow = "hidden";
    log_container.style.width = "100%";
    log_container.style.height = "80vh";
    log_container.style.overflow = "visible";
})

sign_btn.addEventListener("click", () => {
    firstSlide.style.width = 0;
    firstSlide.style.height = 0;
    firstSlide.style.overflow = "hidden";
    sign_constainer.style.width = "100%";
    sign_constainer.style.height = "80vh";
    sign_constainer.style.overflow = "visible";
})

logback.addEventListener("click", () => {
    log_container.style.width = 0;
    log_container.style.height = 0;
    log_container.style.overflow = "hidden";
    firstSlide.style.width = "100%";
    firstSlide.style.height = "30.2vh";
    firstSlide.style.overflow = "visible";
})

signback.addEventListener("click", () => {
    sign_constainer.style.width = 0;
    sign_constainer.style.height = 0;
    sign_constainer.style.overflow = "hidden";
    firstSlide.style.width = "100%";
    firstSlide.style.height = "30.2vh";
    firstSlide.style.overflow = "visible";
})

log_link.addEventListener("click", () => {
    sign_constainer.style.width = 0;
    sign_constainer.style.height = 0;
    sign_constainer.style.overflow = "hidden";
    log_container.style.width = "100%";
    log_container.style.height = "80vh";
    log_container.style.overflow = "visible";
})

sign_link.addEventListener("click", () => {
    log_container.style.width = 0;
    log_container.style.height = 0;
    log_container.style.overflow = "hidden";
    sign_constainer.style.width = "100%";
    sign_constainer.style.height = "80vh";
    sign_constainer.style.overflow = "visible";
})