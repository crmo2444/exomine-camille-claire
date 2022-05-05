import { governorHTML } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML } from "./facility.js"
import { colonyMineralsHTML } from "./colonyMinerals.js"
import { miningHTML } from "./facilityMinerals.js"
import { mineralsListHTML, spaceCart } from "./facilityMineralsList.js"
import { purchaseFeature} from "./database.js"


export const Exomine = () => {
    
    let html = `
    <h1 class="header">Solar System Mining Marketplace</h1>
    <article class="top-container">
        <div class="dropdowns">
            <section class="governors">
                ${governorHTML()}
            </section>
            <section class="facilities">
                ${facilityHTML()}
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

    <article class="sidebyside">
    <article class="showfacility">
        <section class="mining">
            ${miningHTML()}
        </section>
        </article>

        <section class="order">
        <h3>Space Cart</h3>
        <br>
        <button class="orderButton" id="orderButton">Purchase Mineral</button>
        </section>
        </article>
    `

    return html
}

export const ExomineTwo = () => {
    
    let html = `
    <h1 class="header">Solar System Mining Marketplace</h1>
    <article class="top-container">
        <div class="dropdowns">
            <section class="governors">
                ${governorHTML()}
            </section>
            <section class="facilities">
                ${facilityHTML()}
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
                <h3>Space Cart</h3>
                ${spaceCart()}
                <button class="orderButton" id="orderButton">Purchase Mineral</button>
                </section>
                </article>
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
        }
    }

)

