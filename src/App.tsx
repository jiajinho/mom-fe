import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import api from 'api';
import { Response as ForecastResponse } from 'api/weather/type';
import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';

const Wrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding: 10px 20px;

  background: var(--neutral-color);
`;

function App() {
  const [value, setValue] = useState<Date>(new Date());
  const [forecast, setForecast] = useState<ForecastResponse>();

  useEffect(() => {
    (async () => {
      const response = await api.weather.getLatest2Hour(value);
      setForecast(response);
    })();
  }, [value]);

  // console.log(forecast);


  return (
    <Wrapper>
      <DatePicker
        selected={value}
        onChange={setValue}
      />

      <Weather value={forecast?.items[0]?.forecasts} />
    </Wrapper>
  );
}

export default App;
