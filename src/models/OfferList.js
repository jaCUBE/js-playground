import {Offer} from './Offer';

/**
 * OfferList handles list of available convergence offers.
 */

export class OfferList {

    /**
     *
     * @param {String} json
     */
    constructor(json) {
        this.version = json.version;
        this.build = json.build;
        this.offers = [];

        // Let's create Offer instances
        this._parseOffers(json.data);

        // Initial reset
        this.reset();
    }

    /**
     * Resets filtered items just to all items.
     * @returns {OfferList}
     */
    reset() {
        this.filteredOffers = this.offers.slice(0);

        return this;
    }


    /**
     * Filters by logical SIM count.
     * @param {number} simCount Logical SIM count
     * @returns {OfferList}
     */

    filterBySimCount(simCount) {
        let logicalSimCount = Offer.getLogicalSimCount(simCount);

        this.filteredOffers = this.filteredOffers.filter(function (offer) {
            return offer.sim.count === logicalSimCount;
        });

        return this;
    }

    /**
     * Filters by speed of fixed internet.
     * @param {number} fixedSpeed Fixed internet speed [Mbps}
     * @returns {OfferList}
     */

    filterByFixedSpeed(fixedSpeed) {
        this.filteredOffers = this.filteredOffers.filter(function (offer) {
            return offer.internet.fixed.speed === fixedSpeed;
        });

        return this;
    }

    /**
     * Filters by mobile internet fair usage policy (FUP).
     * @param {number} fup FUP [GB]
     * @returns {OfferList}
     */
    filterByFup(fup) {
        this.filteredOffers = this.filteredOffers.filter(function (offer) {
            return offer.internet.mobile.fup === fup;
        });

        return this;
    }

    /**
     * Retrieves all filtered offers.
     * @param {boolean} flush Autoflush filtered items and reset filtering
     * @returns {Offer} List of filtered offer
     */
    getFilteredOffers(flush = true) {
        let output = this.filteredOffers;

        if (flush) {
            this.reset();
        }

        return output;
    }


    /**
     * Browses source object array and create Offer instances.
     * @param offersList Source objects in array
     * @private
     */
    _parseOffers(offersList) {
        for (let i = 0; i < offersList.length; i++) {
            this.offers[i] = new Offer(offersList[i]);
        }
    }
}