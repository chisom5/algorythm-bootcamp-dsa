/**
 * @param {number[]} fuelAtVenues
 * @param {number[]} fuelToNextVenue
 * @returns {number}
 */
function findStartingVenue(fuelAtVenues, fuelToNextVenue) {
  //   if fuel budget is not enough for next
  if (
    fuelAtVenues.reduce((a, b) => a + b, 0) <
    fuelToNextVenue.reduce((a, b) => a + b, 0)
  ) {
    return -1;
  }

  let tank = 0,
    start = 0;

  for (let i = 0; i < fuelAtVenues.length; i++) {
    tank += fuelAtVenues[i] - fuelToNextVenue[i];

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return start;
}
