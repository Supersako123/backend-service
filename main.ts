
import { fetchData } from './api/functions';
import { TBulkWeatherData } from './lib/types';
import { cityToString, functionLoop } from './lib/functions';
import DB from './Services/WeatherService/WeatherServiceProvider';

const key = process.env.API_KEY;

const citiesById = {
  "Las Vegas": 3606250,
  "New York": 5128638,
  "Washington D.C.": 4140963,
};


function main() {

  const cityIdstring = cityToString(citiesById);

  functionLoop(async () => {
    console.log("Tracking weather in the following cities: ");
    for (const city in citiesById) {
      console.log(city);
    };

    try {
      const data: TBulkWeatherData = await fetchData(`https://api.openweathermap.org/data/2.5/group?id=${cityIdstring}&appid=${key}`);
      await DB.insertMany(data);
    } catch (error) {
      console.log(`An Error occured: ${error}`)
    }
    console.log("Done. Weather will be tracked again in 1 minute");
  }, 60000)
}

main();

