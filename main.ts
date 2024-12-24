
import { fetchData } from './Services/api/functions';
import { TResponse } from './lib/types';
import { Insert } from './Services/database/functions';

const key = process.env.API_KEY;

const cities = {
  "Las Vegas": {
    lat: 36.17,
    lon: -115.17,
  },
  "New York": {
    lat: 40.73,
    lon: -73.93,
  },
  "Reno": {
    lat: 39.53,
    lon: -119.81,
  }
};



async function main() {

  console.log("Tracking weather in: ");
  for (const city in cities) {
    console.log(city);
  };

  const data: TResponse = await fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=36.17&lon=-115.17&appid=${key}`);
  await Insert(data);
  console.log("Done. Weather will be tracked again in 1 minute");

  setInterval(async () => {
    console.log("Tracking weather in: ");
    for (const city in cities) {
      console.log(city);
    };

    const data: TResponse = await fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=36.17&lon=-115.17&appid=${key}`);
    await Insert(data);
    console.log("Done. Weather will be tracked again in 1 minute");

  }, 60000);
}

main();

