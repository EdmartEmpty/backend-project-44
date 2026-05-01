function getRandomInt(min, max) {
  // Формула: Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInt;