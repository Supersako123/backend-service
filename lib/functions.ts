
export async function functionLoop(fn: () => void, time: number) {
  fn();

  setInterval(fn, time);
}

export function cityToString(cities: Record<string, number>): string {

  return Object.values(cities).join(',');

}

