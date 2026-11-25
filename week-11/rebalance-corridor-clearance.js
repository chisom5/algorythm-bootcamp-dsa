/**
 * @param {number[]} maxClearance
 * @returns {boolean}
 */
function canReachCorridorEnd(maxClearance) {

    let max_Reach = 0;

    for(let i = 0; i<maxClearance.length; i++){
        if(i > max_Reach){
            return false;
        }

        max_Reach = Math.max(max_Reach, i + maxClearance[i]);
    }

    return true;
}