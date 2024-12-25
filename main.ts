
import { fetchData } from './Services/api/functions';
import { TBulkWeatherData, TWeatherData } from './lib/types';
import { PrismaWeatherRepository } from './Services/WeatherService/PrismaWeatherRepository';

const key = process.env.API_KEY;

const cities = {
  "Las Vegas": {
    id: 3606250,
  },
  "New York": {
    id: 5128638,
  },
  "Washington D.C.": {
    id: 4140963,
  }
};

const cityIdstring = Object.values(cities).map(({ id }) => id).join(',');

async function main() {

  const DB = new PrismaWeatherRepository;

  console.log("Tracking weather in the following cities: ");
  for (const city in cities) {
    console.log(city);
  };

  const data: TBulkWeatherData = await fetchData(`https://api.openweathermap.org/data/2.5/group?id=${cityIdstring}&appid=${key}`);
  await DB.insertMany(data);
  console.log("Done. Weather will be tracked again in 1 minute");


  setInterval(async () => {
    console.log("Tracking weather in the following cities: ");
    for (const city in cities) {
      console.log(city);
    };

    const data: TBulkWeatherData = await fetchData(`https://api.openweathermap.org/data/2.5/group?id=${cityIdstring}&appid=${key}`);
    await DB.insertMany(data);
    console.log("Done. Weather will be tracked again in 1 minute");

  }, 60000);
}

main();

