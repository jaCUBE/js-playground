/**
 * This is one Convergence offer.
 */

export class Offer {

    /**
     * Parses object into this class.
     * @param offerData
     */
    constructor(offerData) {
        for (let property in offerData) {
            this[property] = offerData[property];
        }
    }


    /**
     * Returns logical SIM count because offers are not available for any SIM count (i.e.: for 3 SIMs there are offer for 4 SIMs)
     * @param {number} simcount Selected SIM count
     * @returns {number} Logical SIM count for offer filtering
     */

    static getLogicalSimCount(simcount) {
        if (simcount === 3) {
            return 4;
        }

        if (simcount === 5) {
            return 6;
        }

        return simcount;
    }
}