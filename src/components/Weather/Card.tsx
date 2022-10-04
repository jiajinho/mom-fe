import React from 'react';
import styled from 'styled-components/macro';

import type { Forecast } from 'api/weather/type';
import { mapWeatherToSVGPath } from './utils';

const Wrapper = styled.div`
  display: flex;
  gap: 5px;

  background: white;
  padding: 5px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;
`;

const Icon = styled.img`
  aspect-ratio: 1/1;
  height: 40px;
  width: auto;
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  & #area {
    font-weight: 500;
  }

  & #forecast {
    font-size: 10px;
    color: #aaa;
  }
`;

export default (prop: Forecast) => (
  <Wrapper>
    <Icon src={mapWeatherToSVGPath(prop.forecast)} />

    <Content>
      <p id="area">{prop.area}</p>
      <p id="forecast">{prop.forecast as string}</p>
    </Content>
  </Wrapper>
);