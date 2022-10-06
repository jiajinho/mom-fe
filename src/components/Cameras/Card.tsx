import React from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'types';
import { mapWeatherToSVGPath } from 'utils';

import Tooltip, { Tooltip as $Tooltip } from 'components/common/Tooltip';
import Globe, { Wrapper as $Globe } from 'components/common/svg/Globe';
import CaretUp, { Wrapper as $CaretUp } from 'components/common/svg/CaretUp';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  background: white;
  padding: 5px 10px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;

  ${$CaretUp} { 
    height: 20px;
    cursor: pointer;
  }

  ${$Globe}:hover path,
  ${$CaretUp}:hover path { 
    fill: var(--secondary-color);
  }
`;

const Icon = styled.img`
  aspect-ratio: 1/1;
  height: 40px;
  width: auto;
  display: block;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  & #forecast {
    font-size: 10px;
    color: #aaa;
  }
`;

const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p { 
    margin-right: 3px;
    font-weight: 500 
  }

  ${$Tooltip} { white-space: nowrap }

  ${$Globe} { 
    height: 16px;
    cursor: pointer; 
  }
`;

export default ({ onImageIconClick, onGlobeClick, ...props }: {
  onImageIconClick: () => void,
  onGlobeClick: () => void
} & Camera) => {

  const tooltip = `${props.location.latitude}, ${props.location.longitude}`;

  return (
    <Wrapper>
      <Icon src={mapWeatherToSVGPath(props.area.weather)} />

      <Content>
        <Area>
          <p>{props.area.name}</p>

          <Tooltip text={tooltip}>
            <Globe color="#bbb" onClick={onGlobeClick} />
          </Tooltip>
        </Area>

        <p id="forecast">
          {props.area.weather}
        </p>
      </Content>

      <CaretUp
        color="#bbb"
        direction="right"
        onClick={() => {
          onImageIconClick();
          onGlobeClick();
        }}
      />
    </Wrapper>
  );
}