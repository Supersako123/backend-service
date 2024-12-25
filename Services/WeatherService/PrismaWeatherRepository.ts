import prisma from "../../lib/script";
import { TBulkWeatherData, TWeatherData } from "../../lib/types";
import { IWeatherRepository } from "./IWeatherRepository";

export class PrismaWeatherRepository implements IWeatherRepository {

  async insert(data: TWeatherData): Promise<void> {
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
      data: weather
    })
  }

  async insertMany(data: TBulkWeatherData): Promise<void> {
    const weather: any[] = [];
    data.list.forEach((data) => {
      weather.push({
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
      })
    })
    await prisma.weather.createMany({
      data: weather,
    })
  }

}