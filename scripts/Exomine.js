import { governorHTML } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML } from "./facility.js"
import { colonyMineralsHTML } from "./colonyMinerals.js"
import { miningHTML } from "./facilityMinerals.js"
import { mineralsListHTML, spaceCart } from "./facilityMineralsList.js"
import { purchaseFeature } from "./database.js"

export const Exomine = () => {

    let html = `
    <header class="header">
        <h1 class="headerTitle">Solar System Mining Marketplace</h1>
        <img class="saturn" src="https://i.pinimg.com/originals/d2/86/37/d28637bbb44cf94c535ee17f1bcfa755.jpg">
    </header>
    <section class="top">
    <article class="top-container">
        <div class="dropdowns">
            <section class="governors">
                ${governorHTML()}
            </section>
            </div>
            <div class="colony-stuff">
            <section class="colonyresources">
            ${colonyHTML()}
            </section>
            <section class="colonyminerals">
            ${colonyMineralsHTML()}
            </section>
            </div>
            </article>
    </section>
            
            <section class="facilities">
                ${facilityHTML()}
            </section>
    
            <article class="sidebyside">
            <article class="showfacility"> 
                <section class="mining">
                    ${miningHTML()}
                </section>
                
                <section class="list">
                ${mineralsListHTML()}
                </section>
                </article>

                <section class="order">
                <h3 class="cart">Space Cart</h3>
                <article id="reset">${spaceCart("")}</article>
                <div class="center"><button class="orderButton" id="orderButton">Purchase Mineral</button></div>
                </section>
                </article>
                <footer class="footer">
                <div class="firstline">
                <p>Click the Octocat to Learn More!</p>
                </div>
                <div class="secondline">
                <p>©️ Camille Faulkner</p><br>
                <a href="https://github.com/camillefaulkner/exomine-camille-claire" target="_blank"><img class="github" src="images/githublogo.svg"></a>
                <p> and Claire Morgan-Sanders</p>
                <a href="https://github.com/crmo2444/exomine-camille-claire" target="_blank"><img class="github" src="images/githublogo.svg"></a>
                </div>
                </footer>
                `
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            purchaseFeature()
            document.dispatchEvent(new CustomEvent("stateChanged"))
            document.getElementById("reset").innerHTML=""
        }
    }
)

