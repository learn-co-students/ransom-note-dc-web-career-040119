function buildHistogram (text) {
  return text.reduce((total, letter) => {
    total[letter] ? total[letter] += 1 : total[letter] = 1
    return total
  }, {})
}

function canBuildNote (magazine, note) {
  const magazineHistogram = buildHistogram(magazine)
  const noteLetters = note.split('')
  const noteHistogram = buildHistogram(noteLetters)
  return noteLetters.every(letter => {
    return (
      parseInt(magazineHistogram[letter]) >= parseInt(noteHistogram[letter])
    )
  })
}
