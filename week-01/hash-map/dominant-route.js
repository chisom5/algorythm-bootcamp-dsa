function findDominantRoute(routes) {

    let count = 0;
    let dominant;

    for (let route of routes) {
        if (count === 0) {
            dominant = route;
        }

        if (route === dominant) {
            count++
        } else {
            count--
        }
    }

    return dominant;
}
