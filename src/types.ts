import type { Weather } from 'api/weather/types';

export type Location = {
  latitude: number,
  longitude: number
}

export type AreaCondition = {
  area: string,
  weather: Weather,
  location: Location,
  camera: {
    url: string,
    location: Location
  }
}