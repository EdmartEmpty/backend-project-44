const nod = (a, b) => {
  if (b === 0) {
    throw new Error('На ноль делить нельзя')
  }
  else if ((a % b) === 0) {
    return b
  }

  return nod(b, a % b)
}

export { nod }
