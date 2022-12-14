import { AreaMetadata, Weather } from "api/weather/types";
import { Location } from "types";

export function applyStyleIf(predicate: boolean, css: string) {
  if (predicate) return css;
  return '';
}

//https://cdn-images-1.medium.com/max/800/1*ZrwEraj9S-u_KOWdKWc8sQ.png
export function getNearestArea(location: Location, areaMetadata: AreaMetadata[]) {
  if (!areaMetadata.length) return null;

  const nearest = {
    distance: 100,
    area: areaMetadata[0]
  }

  for (let i = 1; i < areaMetadata.length; i++) {
    const xSq = Math.pow(location.latitude - areaMetadata[i].label_location.latitude, 2);
    const ySq = Math.pow(location.longitude - areaMetadata[i].label_location.longitude, 2);

    const distance = Math.sqrt(xSq + ySq);

    if (distance < nearest.distance) {
      nearest.distance = distance;
      nearest.area = areaMetadata[i];
    }
  }

  return nearest.area;
}

export function mapWeatherToSVGPath(weather: Weather) {
  const baseUrl = "static/weather/";
  let fileName = "";

  switch (weather) {
    case "Cloudy":
      fileName = "overcast.svg";
      break;


    case "Partly Cloudy (Day)":
      fileName = "partly-cloudy-day.svg";
      break;


    case "Partly Cloudy (Night)":
      fileName = "partly-cloudy-night.svg";
      break;


    case "Light Rain":
    case "Light Showers":
    case "Showers":
    case "Passing Showers":
      fileName = "drizzle.svg";
      break;


    case "Fair & Warm":
    case "Fair (Day)":
      fileName = "fair-day.svg";
      break;

    case "Fair (Night)":
      fileName = "fair-night.svg";
      break;


    case "Moderate Rain":
      fileName = "rain.svg";
      break;

    case "Heavy Showers":
      fileName = "extreme-rain.svg";
      break;


    case "Thundery Showers":
      fileName = "thunderstorms-rain.svg";
      break;


    case "Heavy Thundery Showers":
    case "Heavy Thundery Showers with Gusty Winds":
      fileName = "thunderstorms-extreme-rain.svg";
      break;


    case "Windy":
      fileName = "wind.svg";
      break;


    default:
      console.warn(`Got unrecognized forecast value: ${weather}, showing N/A icon.`);
      fileName = "not-available.svg";
  }

  return `${baseUrl}/${fileName}`;
}