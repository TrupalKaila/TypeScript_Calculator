function convertToDMS() {
    const input = document.getElementById('calculations');
    if (!input)
        return "";
    let decimal = parseFloat(input.value);
    if (isNaN(decimal)) {
        alert("Enter a valid decimal degree value.");
        return "";
    }
    const degrees = Math.floor(decimal);
    const minutesFloat = (decimal - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = ((minutesFloat - minutes) * 60).toFixed(2);
    const result = `${degrees}° ${minutes}'${seconds}"`;
    input.value = result;
    return result;
}
// function convertToDecimalDegrees() {
//     const input = document.getElementById('calculations');
//     const value = input.value;
//     const match = value.match(/(\d+)[°\s]+(\d+)[']+(\d+(\.\d+)?)[\"]/);
//     if (!match) {
//         alert("Enter a valid DMS format like 12° 30' 0\"");
//         return;
//     }
//     const degrees = parseInt(match[1]);
//     const minutes = parseInt(match[2]);
//     const seconds = parseFloat(match[3]);
//     const decimal = degrees + minutes / 60 + seconds / 3600;
//     input.value = decimal;
//     return decimal;
// }
function basicFun(operationName) {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    let value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }
    let result = value;
    switch (operationName) {
        case 'absolute':
            result = Math.abs(value);
            break;
        case 'floor':
            result = Math.floor(value);
            break;
        case 'ceil':
            result = Math.ceil(value);
            break;
        case 'random':
            result = Math.random();
            break;
        case 'toDMS':
            result = convertToDMS();
            break;
        // case 'toDEG':
        //     result = convertToDecimalDegrees();
        //     break;
    }
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
    console.log(result);
}
export {};
//# sourceMappingURL=function.js.map