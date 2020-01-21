const validQualityDifficulty = (num) => {
    if (num  < 1 || num  > 10) {
        return false
    } else { return true}
}

module.exports = validQualityDifficulty;