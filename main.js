"use strict";
let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNum.length; i++) {
    if (ordinalNum[i] == 1) {
        console.log(`${ordinalNum[i]}st`);
    }
    else if (ordinalNum[i] == 2) {
        console.log(`${ordinalNum[i]}nd`);
    }
    else if (ordinalNum[i] == 3) {
        console.log(`${ordinalNum[i]}rd`);
    }
    else if (ordinalNum[i] >= 4 && ordinalNum[i] <= 9) {
        console.log(`${ordinalNum[i]}th`);
    }
}