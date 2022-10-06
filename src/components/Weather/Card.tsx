import React from 'react';
import styled from 'styled-components/macro';

import type { Forecast } from 'api/weather/types';
import { mapWeatherToSVGPath } from './utils';

const Wrapper = styled.div`
  width: 150px;

  background: white;
  padding: 15px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;

  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  aspect-ratio: 1/1;
  height: 80px;
  width: auto;
  display: block;
`;

const Weather = styled.p`
  font-size: 10px;
  color: #aaa;
  text-align: center;
`;

const Area = styled.p`
  font-weight: 500;
  text-align: center;
`;

export default (prop: Forecast) => (
  <Wrapper>
    <Icon src={mapWeatherToSVGPath(prop.forecast)} />
    <Weather>{prop.forecast as string}</Weather>
    <Area>{prop.area}</Area>
  </Wrapper>
);