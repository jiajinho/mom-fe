import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import api from 'api';
import type { Response as ForecastResponse } from 'api/weather/types';
import type { Response as TrafficResponse } from 'api/traffic/types';

import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';
import Traffic from 'components/Traffic';
import { AreaCondition } from 'types';
import { getNearestArea } from 'utils';

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

  const [conditions, setConditions] = useState<AreaCondition[]>();

  useEffect(() => {
    (async () => {
      const promises: [Promise<ForecastResponse>, Promise<TrafficResponse>] = [
        api.weather.getLatest2Hour(date),
        api.traffic.getTrafficImages(date)
      ];

      await Promise.all(promises);

      const forecastResponse = await promises[0];
      const trafficResponse = await promises[1];

      console.log(trafficResponse);
      getNearestArea(trafficResponse.items[0].cameras[0].location, forecastResponse.area_metadata);

    })();

    // api.weather.getLatest2Hour(date).then(setForecast);
    // api.traffic.getTrafficImages().then(setTraffic);




    // (async () => {
    //   const forecast = await api.weather.getLatest2Hour(date);
    //   setForecast(forecast);

    // })();
  }, [date]);

  // console.log(forecast);


  return (
    <Wrapper>
      <DatePicker
        selected={date}
        onChange={setDate}
      />

      <Weather value={forecast?.items[0]?.forecasts} />

      <Traffic value={traffic?.items[0]?.cameras} />
    </Wrapper>
  );
}

export default App;
