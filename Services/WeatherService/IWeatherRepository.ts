import { TBulkWeatherData, TWeatherData } from "../../lib/types";

export interface IWeatherRepository {
  insert(data: TWeatherData) : Promise<void>;
  insertMany(data: TBulkWeatherData) : Promise<void>;
}