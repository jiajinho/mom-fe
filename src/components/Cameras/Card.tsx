import React from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'types';
import { mapWeatherToSVGPath } from 'utils';

import Tooltip, { Tooltip as $Tooltip } from 'components/common/Tooltip';
import Globe, { Wrapper as $Globe } from 'components/common/svg/Globe';
import CaretUp, { Wrapper as $CaretUp } from 'components/common/svg/CaretUp';
import useViewportStore from 'stores/useViewportStore';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  background: white;
  padding: 5px 10px;
  border-radius: 8px;

  box-shadow: 1px 1px 6px 1px #0001;

  ${$CaretUp} { 
    height: 16px;
    cursor: pointer;
    flex-shrink: 0;
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

  & #subtitle {
    font-size: 8px;
    color: #aaa;
  }
`;

const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p { 
    margin-right: 3px;
    font-size: 12px;
    font-weight: 500 
  }

  ${$Tooltip} { white-space: nowrap }

  ${$Globe} { 
    height: 16px;
    cursor: pointer; 
  }
`;

export default ({ onPreview, onGlobeClick, ...props }: {
  onPreview: () => void,
  onGlobeClick: () => void
} & Camera) => {

  const md = useViewportStore(state => state.md);
  const tooltip = `${props.location.latitude}, ${props.location.longitude}`;

  const handleCaretClick = () => {
    md && onPreview();
    onGlobeClick();
  }

  return (
    <Wrapper>
      {md &&
        <Icon src={mapWeatherToSVGPath(props.area.weather)} />
      }

      <Content>
        <Area>
          <p>{props.area.name}</p>

          {md &&
            <Tooltip text={tooltip}>
              <Globe color="#bbb" onClick={onGlobeClick} />
            </Tooltip>
          }
        </Area>

        <p id="subtitle">
          {props.area.weather}
        </p>
      </Content>

      <CaretUp
        color="#bbb"
        direction="right"
        onClick={handleCaretClick}
      />
    </Wrapper>
  );
}