console.time('init');
import json from './data/convergence_2018-07-25.json';

import {OfferList} from './models/OfferList';
import {OfferCalculator} from './models/OfferCalculator';







/**
 * ---------- DEMO ------------
 */

// Main instance of Offer List
let offerList = new OfferList(json);
console.log('Initial OfferList', offerList);
console.timeEnd('init');



console.log('----------------------');

console.time('testFiltering');
// Filters by many params
let testFiltering = offerList.filterBySimCount(2).filterByFup(10).filterByFixedSpeed(100).getFilteredOffers();
console.log('Filtering 2 SIMs, 10 GB, 100 Mbps', testFiltering);
console.timeEnd('testFiltering');



console.log('----------------------');

console.time('testSimLogical');
// Filters by logical SIM count
let testSimLogical = offerList.filterBySimCount(3).getFilteredOffers();
console.log('Filtering offer for selected 3 SIMs', testSimLogical);
// Available FUP for previous filter
let testFupAvailable = OfferCalculator.calculateAvailableFupFromOfferList(testSimLogical); // Feeding filtered offers to calculator
console.log('Available FUP for 3 SIMs', testFupAvailable);
console.timeEnd('testSimLogical');
