export async function functionLoop(fn: () => void, time: number) {
  fn();

  setInterval(fn, time);
}
