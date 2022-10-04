import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import api from 'api';
import DatePicker from 'components/common/DatePicker';

const Wrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding: 10px 20px;

`;

function App() {

  const [value, setValue] = useState<Date | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const x = await api.weather.getLatest2Hour("1");
  //     const y = await api.traffic.getTrafficImages();
  //     console.log(x);
  //     console.log(y);
  //   })();
  // }, []);


  return (
    <Wrapper>
      <DatePicker
        selected={value}
        onChange={setValue}
      />
    </Wrapper>
  );
}

export default App;
