function maximizeClearedAlerts(riskAlerts, reserveBlocks) {
    let alerts_sort = riskAlerts.sort((a, b) => a - b);
    let reserve_sort = reserveBlocks.sort((a, b) => a - b);

    let alert_indx = 0, reserve_indx = 0, count = 0;

    while (alert_indx < alerts_sort.length && reserve_indx < reserve_sort.length) {
        if (alerts_sort[alert_indx] <= reserve_sort[reserve_indx]) {
            count++;
            alert_indx++;
            reserve_indx++
        } else {
            reserve_indx++;
        }
    }

    return count;
}
