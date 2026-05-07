const getProgressionNumbers = (start, end, step) => {
  let result = new Array(end)

  for (let i = 0; i < end; i++) {
    result[i] = start + i * step
  }

  return result
}

export { getProgressionNumbers }
