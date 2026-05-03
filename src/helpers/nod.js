const nod = (a, b) => {
  if ((a % b) === 0) {
    return b
  }

  return nod(b, a % b)
}

export { nod }
