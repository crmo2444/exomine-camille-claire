import { governorHTML, governorHTMLTwo } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML, facilityHTMLTwo } from "./facility.js"
import { colonyMineralsHTML } from "./colonyMinerals.js"
import { miningHTML } from "./facilityMinerals.js"
import { mineralsListHTML, spaceCart } from "./facilityMineralsList.js"
import { purchaseMineral } from "./database.js"
import { purchaseFeature} from "./spaceCart.js"


export const Exomine = () => {
    
    let html = `
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

        <section class="mining">
            ${miningHTML()}
        </section>

        <section class="order">
        <h3>Space Cart</h3>
        <button id="orderButton">Purchase Mineral</button>
        </section>
    `

    return html
}

export const ExomineTwo = () => {
    
    let html = `
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
                
                <section class="mining">
                    ${miningHTML()}
                </section>

                <section class="list">
                    ${mineralsListHTML()}
                </section>

                <section class="order">
                <h3>Space Cart</h3>
                ${spaceCart()}
                <button id="orderButton">Purchase Mineral</button>
                </section>
                `
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            purchaseFeature()
        }
    }

)