const occurrence = array => {
  let result = {}
  array.forEach((v, i) =>
    !result[v] ? result[v] = [i] : result[v].push(i)
  )
  Object.keys(result).forEach(elem => {
    result[elem] = {
      'index': result[elem],
      'length': result[elem].length
    }
  })

  return result
}

module.exports = occurrence
