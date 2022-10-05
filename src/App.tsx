import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import api from 'api';
import type { Response as ForecastResponse } from 'api/weather/types';
import type { Response as TrafficResponse } from 'api/traffic/types';

import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';
import Traffic from 'components/Traffic';
import { Camera } from 'types';
import { getNearestArea } from 'utils';
import CameraGroup from 'components/CameraGroup';

const Wrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding: 10px 20px;

  background: var(--neutral-color);
`;

function App() {
  const [date, setDate] = useState<Date>(new Date());
  const [forecast, setForecast] = useState<ForecastResponse>();
  const [traffic, setTraffic] = useState<TrafficResponse>();

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
      });

      setCameras(cameras);
    })();
  }, [date]);

  return (
    <Wrapper>
      <DatePicker
        selected={date}
        onChange={setDate}
      />

      {/* <Weather value={forecast?.items[0]?.forecasts} />

      <Traffic value={traffic?.items[0]?.cameras} /> */}

      <CameraGroup value={cameras} />
    </Wrapper>
  );
}

export default App;
