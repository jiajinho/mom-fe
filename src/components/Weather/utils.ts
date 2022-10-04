import { Weather } from "api/weather/types";

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