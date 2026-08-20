function computeStreakMultiplier(arena_multiplier, streak_count) {
    if (streak_count === 0) return 1;

    let currentMultiplier = streak_count < 0 ? 1 / arena_multiplier : arena_multiplier;
    let result = 1;

    for(let i = Math.abs(streak_count); i > 0; i = Math.floor(i/2)){
        if(i % 2 === 1){
            result *= currentMultiplier;
        }
        currentMultiplier *= currentMultiplier
    }

    return result;

}