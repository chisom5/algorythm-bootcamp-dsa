/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function coinChangeII(amount, coins){
    let memo = new Map();

    function helper(i, remaining){

        if(remaining === 0 ) return 1; // we have a possible combination.
        if(remaining < 0) return 0; // edge case for negative 

        // ensure we have account for all coins
        if(i === coins.length) return 0;

        const key = `${i}-${remaining}`;
        if(memo.has(key)) return memo.get(key);

        let ways = 0;

        for(let x = i; x < coins.length; x++){
            ways += helper(i, remaining - coins[x]);
        }

        memo.set(key, ways);
        return ways;
    }

    return helper(0, amount);

}

