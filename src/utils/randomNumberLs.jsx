export default function randomNumber(min, max, setter) {
  const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  setter(newNumber);
}
