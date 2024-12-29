
import dotenv from 'dotenv';
dotenv.config(); 

import { fetchData } from './api/functions';
import { TBulkWeatherData} from './lib/types';
import { cityToString, functionLoop } from './lib/functions';
import DB from './Services/WeatherService/WeatherServiceProvider';
import { duration } from './config';
import { citiesById } from './config';

const key = process.env.API_KEY;

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

    console.log(`Done. Weather will be tracked again in ${duration}`);
  }, duration) 
}

main();

