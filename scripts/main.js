import { Exomine, ExomineTwo } from "./Exomine.js"

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = Exomine()


const renderHTML = () => {
    parentHTMLElement.innerHTML = ExomineTwo()
}

document.addEventListener("stateChanged", event => {
    renderHTML()
})

