function locateCargoCode(manifestCodes, requestedCode) {
    let startIndx = 0;
    let endIndx = manifestCodes.length;

    while (startIndx <= endIndx) {
        let midVal = Math.floor(startIndx + (endIndx - startIndx) / 2);

        if (manifestCodes[midVal] === requestedCode) {
            return midVal;
        } else if (manifestCodes[midVal] < requestedCode) {
            startIndx = midVal + 1;
        } else {
            endIndx = midVal - 1;
        }
    }

    return - 1;
}
