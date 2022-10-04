export type Weather =
  "Partly Cloudy (Day)" |
  "Cloudy" |
  "Light Rain" |
  "Thundery Showers" |
  "Light Showers" |
  "Showers" |
  "Heavy Thundery Showers with Gusty Winds" |
  "Fair (Day)" |
  "Fair & Warm" |
  "Moderate Rain" |
  "Heavy Showers" |
  "Heavy Thundery Showers" |
  "Passing Showers" |
  "Partly Cloudy (Night)" |
  "Fair (Night)" |
  "Windy" |
  unknown;

export type Forecast = {
  area: string,
  forecast: Weather
};

export type AreaMetadata = {
  name: string,
  label_location: {
    latitude: number,
    longitude: number
  }
};

export type Item = {
  forecasts: Forecast[],
  timestamp: string,
  update_timestamp: string,
  valid_period: { start: string, end: string }
}

export type Response = {
  api_info: {
    status: "healthy" | unknown
  },
  area_metadata: AreaMetadata[],
  items: Item[]
}