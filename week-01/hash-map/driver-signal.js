function hasRepeatedDriverSignal(driverSignals) {
    let seen = new Set();

    for(let i=0; i<driverSignals.length; i++){
        if(seen.has(driverSignals[i])){
            return true;
        }
        seen.add(driverSignals[i])
    }

    return false;
}
