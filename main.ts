
import dotenv from 'dotenv';
dotenv.config();

import { fetchData } from './api/functions';
import { TBulkWeatherData} from './lib/types';
import { cityToString, functionLoop } from './lib/functions';
import DB from './Services/WeatherService/WeatherServiceProvider';

const key = process.env.API_KEY;

const citiesById = {
  "Las Vegas": 3606250,
  "New York": 5128638,
  "Washington D.C.": 4140963,
};

const cityIdstring = cityToString(citiesById);

function main() {

  functionLoop(async () => {
    console.log("Tracking weather in the following cities: ");
    for (const city in citiesById) {
      console.log(city);
    };

    const response = await fetchData<TBulkWeatherData>(`https://api.openweathermap.org/data/2.5/group?id=${cityIdstring}&appid=${key}`);

    if ('error' in response) {
      console.log(response.error.message)
      response.error.status != 500 ? process.exit() : null; 
    }
    else {
      await DB.insertMany(response.data);
    }

    console.log("Done. Weather will be tracked again in 1 minute");
  }, 60000)
}

main();

