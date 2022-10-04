import React from 'react';
import styled from 'styled-components/macro';

import { Forecast } from 'api/weather/types';
import Card from './Card';

const Wrapper = styled.div`
  h2 { margin-bottom: 10px }
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ({ value }: { value?: Forecast[] }) => (
  <Wrapper>
    <h2>Weather Forecasts</h2>

    <CardGroup>
      {value?.map((v, i) =>
        <Card key={i} {...v} />
      )}
    </CardGroup>
  </Wrapper>
);
