/**
 * numA:
 * numB:
 * symbol:
 * decimal: Number, 表示保留几位小数。
 * roundFlag: Boolean, 表示是否将进行四舍五入取舍。
 */
const cal = function (numA, numB, symbol, decimal, roundFlag) {
    decimal = decimal === undefined ? 5 : decimal;
    roundFlag = roundFlag === undefined ? true : roundFlag;
    let result = null, tempResult = null;
    if (numA && !numB)
        result = numA.toFixed(decimal);
    else if (numA && numB && symbol) {
        tempResult = math.round(math.eval(numA + symbol + numB), 5);
        if (symbol === '%') {
            tempResult = tempResult === numB ? 0 : tempResult;
        }
        if (roundFlag)
            result = tempResult.toFixed(decimal);
    }
    else
        result = 0;
    return Number(result);
};
