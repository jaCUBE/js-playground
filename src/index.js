console.time('init');
import json from './data/convergence_2018-07-25.json';

import {Offer} from "./models/Offer";
import {OfferList} from './models/OfferList';



// Main instance of Offer List
let offerList = new OfferList(json);
console.log('Initial OfferList', offerList);
console.timeEnd('init');



console.time('testFiltering');
let testFiltering = offerList.filterBySimCount(2).filterByFup(10).filterByFixedSpeed(100).getFilteredOffers();
console.log('Filtering 2 SIMs, 10 GB, 100 Mbps', testFiltering);
console.timeEnd('testFiltering');



console.time('testSimLogical');
let testSimLogical = offerList.filterBySimCount(3).getFilteredOffers();
console.log('Filtering offer for selected 3 SIMs', testSimLogical);
console.timeEnd('testSimLogical');