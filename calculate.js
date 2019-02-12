/**
 * numA:
 * numB:
 * symbol:
 * decimal: Number, 表示保留几位小数。
 * roundFlag: Boolean, 表示是否将进行四舍五入取舍。
 */
const cal = function (numA, numB, symbol, decimal, roundFlag) {
    decimal = decimal === undefined ? 2 : decimal;
    roundFlag = roundFlag === undefined ? true : roundFlag;
    let result = null;
    let tempResult = eval(numA + symbol + numB);
    if (roundFlag)
        result = parseFloat(tempResult.toFixed(decimal));
    // else
    //     const result = parseFloat(tempResult.)
    return result;
}
