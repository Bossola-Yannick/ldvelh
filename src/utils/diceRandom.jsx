export default function diceRandom(min, max) {
  const dice = Math.floor(Math.random() * (max - min + min)) + min;
  return dice;
}
