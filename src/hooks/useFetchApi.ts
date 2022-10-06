import { useEffect, useState } from "react";
import type { Camera } from "types";
import type { Response as ForecastResponse } from 'api/weather/types';
import type { Response as TrafficResponse } from 'api/traffic/types';

import api from "api";
import { getNearestArea } from "utils";


export default (date: Date) => {

  const [forecast, setForecast] = useState<ForecastResponse>();
  const [cameras, setCameras] = useState<Camera[]>([]);

  useEffect(() => {
    (async () => {
      const promises: [Promise<ForecastResponse>, Promise<TrafficResponse>] = [
        api.weather.getLatest2Hour(date),
        api.traffic.getTrafficImages(date)
      ];

      await Promise.all(promises);

      const forecastResponse = await promises[0];
      const trafficResponse = await promises[1];

      setForecast(forecastResponse);

      //Aggregate traffic and forecast information
      const cameras: Camera[] = [];

      trafficResponse.items[0]?.cameras.forEach(c => {
        const area = getNearestArea(c.location, forecastResponse.area_metadata);

        const areaName = area?.name || "N/A";
        const forecastArea = forecastResponse.items[0].forecasts.find(f => f.area === areaName);

        cameras.push({
          id: c.camera_id,
          url: c.image,
          location: c.location,
          aspectRatio: c.image_metadata.width / c.image_metadata.height,
          lastUpdated: c.timestamp,
          area: {
            name: areaName,
            weather: forecastArea?.forecast || "N/A",
          }
        });

        setCameras(cameras);
      });
    })();
  }, [date]);

  return { forecast, cameras };
}