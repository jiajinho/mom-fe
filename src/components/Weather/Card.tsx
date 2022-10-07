import React from 'react';
import styled from 'styled-components/macro';

import config from 'config';
import type { Forecast } from 'api/weather/types';
import { mapWeatherToSVGPath } from './utils';

const Wrapper = styled.div`
  width: 75px;
  height: 115px;

  background: white;
  padding: 10px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${config.viewport.md}) {
    width: 100px;
    height: 150px;
    gap: 3px;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1/1;
  height: 40px;
  width: auto;
  display: block;

  @media screen and (min-width: ${config.viewport.md}) {
    height: 60px;
  }
`;

const Weather = styled.p`
  font-size: 7px;
  color: #aaa;
  text-align: center;

  @media screen and (min-width: ${config.viewport.md}) {
    font-size: 10px;
  }
`;

const Area = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: center;

  font-weight: 500;
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: ${config.viewport.md}) {
    font-size: 14px;
  }
`;

export default (prop: Forecast) => (
  <Wrapper>
    <Icon src={mapWeatherToSVGPath(prop.forecast)} />
    <Weather>{prop.forecast as string}</Weather>
    <Area>{prop.area}</Area>
  </Wrapper>
);