/**
 *  Helper calculator for convergence offers.
 */

export class OfferCalculator {

    /**
     *
     * @param {Offer} offersList Array of filtered offers
     * @returns {number[]} Available FUP values
     */
    static calculateAvailableFupFromOfferList(offersList){
        let fup = [];

        // FUP values for every offer in list
        for (let i = 0; i < offersList.length; i++) {
            fup.push(offersList[i].internet.mobile.fup);
        }

        // Unique FUP values
        fup =  Array.from(new Set(fup));

        return fup;
    }
}