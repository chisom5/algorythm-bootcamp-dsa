function diffWaysToCompute(expression) {
    let result = [];
    let memo = {};

    if (memo[expression]) {
        return memo[expression];
    }
    // base case: if the expression is a single number, return it as an array
    if (!expression.includes('+') &&
        !expression.includes('-') &&
        !expression.includes('*')) {
        return [Number(expression)]
    }

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        if (ch === '+' || ch === '-' || ch === '*') {

            let left = expression.slice(0, i);
            let right = expression.slice(i + 1)

            let leftResult = diffWaysToCompute(left);
            let rightResult = diffWaysToCompute(right);

            for (let leftValue of leftResult) {
                for (let rightValue of rightResult) {

                    if (ch === '+') {
                        result.push(leftValue + rightValue);
                    } else if (ch === '-') {
                        result.push(leftValue - rightValue);
                    } else {
                        result.push(leftValue * rightValue);
                    }
                }
            }
        }
    }

    memo[expression] = result;
    return result;
}