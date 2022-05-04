import { governorHTML, governorHTMLTwo } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML, facilityHTMLTwo } from "./facility.js"
import { colonyMineralsHTML } from "./colonyMinerals.js"
import { miningHTML } from "./facilityMinerals.js"
import { mineralsListHTML, spaceCart } from "./facilityMineralsList.js"
import { purchaseFeature} from "./database.js"


export const Exomine = () => {
    
    let html = `
        <h1 class="header">Solar System Mining Marketplace</h1>
        <section class="governors">
        ${governorHTML()}
        </section>

        <section class="colonyresources">
            ${colonyHTML()}
        </section>

        <section class="colonyminerals">
            ${colonyMineralsHTML()}
        </section>

        <section class="facilities">
            ${facilityHTML()}
        </section>
        
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
                <section class="governors">
                    ${governorHTMLTwo()}
                </section>
                
                <section class="colonyresources">
                    ${colonyHTML()}
                </section>

                <section class="colonyminerals">
                    ${colonyMineralsHTML()}
                </section>

                <section class="facilities">
                ${facilityHTMLTwo()}
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

