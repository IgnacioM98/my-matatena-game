export function diceRoller() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
