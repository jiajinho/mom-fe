import type { Weather } from 'api/weather/types';

export type Viewport = {
  sm: string,
  md: string,
  lg: string,
  xl: string
};

export type Location = {
  latitude: number,
  longitude: number
}

export type Camera = {
  id: string,
  url: string,
  location: Location,
  aspectRatio: number,
  lastUpdated: string,
  area: {
    name: string,
    weather: Weather,
  }
}