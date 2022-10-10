import React from 'react';
import styled from 'styled-components/macro';

import config from 'config';
import type { Camera } from 'types';
import { mapWeatherToSVGPath } from 'utils';
import useViewportStore from 'stores/useViewportStore';

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
  width: 100%;

  box-shadow: 1px 1px 6px 1px #0001;
  cursor: pointer;

  ${$CaretUp} { 
    height: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }

  ${$Globe}:hover path{ fill: var(--primary-color) }

  &:hover p#area { color: var(--primary-color) }

  &:hover ${$CaretUp} path { fill: var(--primary-color) }
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
`;

const Weather = styled.p`
  font-size: 7px;
  color: #aaa;

  @media screen and (min-width: ${config.viewport.md}) {
    font-size: 10px;
  }
`;

const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > p { 
    margin-right: 3px;
    font-size: 12px;
    font-weight: 500;
    transition: 0.15s color;
  }

  ${$Tooltip} { white-space: nowrap }

  ${$Globe} { 
    height: 16px;
    cursor: pointer; 
  }

  @media screen and (min-width: ${config.viewport.md}) {
    & > p { font-size: 14px }
  }
`;

export default ({ openPreviewModal, setMapCenter, ...props }: {
  openPreviewModal: () => void,
  setMapCenter: () => void
} & Camera) => {

  const md = useViewportStore(state => state.md);
  const tooltip = `${props.location.latitude}, ${props.location.longitude}`;

  const handleClick = () => {
    md && openPreviewModal();
    setMapCenter();
  }

  return (
    <Wrapper onClick={handleClick}>
      {md &&
        <Icon src={mapWeatherToSVGPath(props.area.weather)} />
      }

      <Content>
        <Area>
          <p id="area">{props.area.name}</p>

          {md &&
            <Tooltip text={tooltip} onClick={e => e.stopPropagation()}>
              <Globe color="#bbb" onClick={setMapCenter} />
            </Tooltip>
          }
        </Area>

        <Weather>
          {props.area.weather}
        </Weather>
      </Content>

      <CaretUp
        color="#bbb"
        direction="right"
      />
    </Wrapper>
  );
}