function countSpawnClearActions(spawnMeter) {
  let count = 0;

  while (spawnMeter > 0) {
    if (spawnMeter % 2 === 0) {
      spawnMeter = spawnMeter / 2;
    } else {
      spawnMeter = spawnMeter - 1;
    }

    count++;
  }

  return count;
}
