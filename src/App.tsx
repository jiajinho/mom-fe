import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import api from 'api';
import type { Response as ForecastResponse } from 'api/weather/types';
import type { Response as TrafficResponse } from 'api/traffic/types';

import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';
import Traffic from 'components/Traffic';

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

  useEffect(() => {
    api.weather.getLatest2Hour(date).then(setForecast);
    api.traffic.getTrafficImages().then(setTraffic);

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

      {/* <Weather value={forecast?.items[0]?.forecasts} /> */}

      <Traffic />
    </Wrapper>
  );
}

export default App;
