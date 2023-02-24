import { modeBtn, shareBtn } from "./constants.js"

modeBtn.addEventListener("click", () => {
    const h = document.querySelector("html")

    if (h.hasAttribute("data-bs-theme")) {
        h.removeAttribute("data-bs-theme")
        modeBtn.innerHTML = `<i class="bi bi-brightness-high"></i>`
        modeBtn.classList.remove("btn-dark")

        modeBtn.classList.add("btn-light")
    }
    else {
        h.setAttribute("data-bs-theme", "dark")
        modeBtn.innerHTML = `<i class="bi bi-moon-stars"></i>`
        modeBtn.classList.remove("btn-light")
        modeBtn.classList.add("btn-dark")
    }
})

shareBtn.addEventListener("click",()=>{

    if (navigator.share) {
        navigator.share({
            title:"Awesome PWA Camera App",
            text:"Swicth, Capture,share Moments",
            url:"https://akashsKillhub.github.io/pwa-camera/"
        })
    }
})