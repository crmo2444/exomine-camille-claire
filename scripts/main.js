import { Exomine } from "./Exomine.js"

const parentHTMLElement = document.querySelector(".container")

const renderHTML = () => {
    parentHTMLElement.innerHTML = Exomine()
}

document.addEventListener("stateChanged", event => {
    renderHTML()
})

renderHTML()
