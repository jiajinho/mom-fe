import React from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'types';
import { mapWeatherToSVGPath } from 'utils';

import Tooltip, { Tooltip as $Tooltip } from 'components/common/Tooltip';
import Globe, { Wrapper as $Globe } from 'components/common/svg/Globe';
import Image, { Wrapper as $Image } from 'components/common/svg/Image';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  background: white;
  padding: 5px 10px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;

  ${$Globe} { height: 16px }
  ${$Tooltip} { white-space: nowrap }
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

  ${$Globe} { height: 15px }

  ${$Image} { 
    height: 14px;
    cursor: pointer; 
  }

  ${$Image}:hover path {
    fill: var(--secondary-color);
  }
`;

export default ({ onImageIconClick, ...props }: {
  onImageIconClick: () => void
} & Camera) => {

  const tooltip = `${props.location.latitude}, ${props.location.longitude}`;

  return (
    <Wrapper>
      <Icon src={mapWeatherToSVGPath(props.area.weather)} />

      <Content>
        <Area>
          <p>{props.area.name}</p>

          <Tooltip text={tooltip}>
            <Globe color="#bbb" />
          </Tooltip>

          <Tooltip text="Click to view image">
            <Image color="#bbb" onClick={onImageIconClick} />
          </Tooltip>
        </Area>

        <p id="forecast">
          {props.area.weather}
        </p>
      </Content>
    </Wrapper>
  );
}