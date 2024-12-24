import prisma from "../../lib/script";
import { TResponse } from "../../lib/types";


export async function Insert(data: TResponse) {

  const weather = {
    name: data.name,
    lon: data.coord.lon,
    lat: data.coord.lat,
    sky: data.weather[0].main,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    sea_level: data.main.sea_level,
    grnd_level: data.main.grnd_level,
    visibility: data.visibility,
    wind_speed: data.wind.speed,
    clouds: data.clouds.all,
  }

  await prisma.weather.create({
    data: weather,
  })
}

