import { governorHTML } from "./Governor.js"
import { colonyHTML } from "./colony.js"
import { facilityHTML } from "./facility.js"

export const Exomine = () => {
    return `
        <section class="governors">
        ${governorHTML()}
        </section>

        <section class="colonyresources">
            ${colonyHTML()}
        </section>

        <section class="facilities">
            ${facilityHTML()}
        </section>
    `
}