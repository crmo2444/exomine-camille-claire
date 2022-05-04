import { governorHTML, governorHTMLTwo } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML } from "./facility.js"
import { colonyMineralsHTML } from "./colonyMinerals.js"
import { miningHTML } from "./facilityMinerals.js"

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
                    ${facilityHTML()}
                </section>
                
                <section class="mining">
                    ${miningHTML()}
                </section>
                `
    return html
}