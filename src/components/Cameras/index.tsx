import React from 'react';
import styled from 'styled-components/macro';
import { LatLngExpression } from 'leaflet';

import config from 'config';
import locale from 'locale';
import { Camera } from 'types';
import Card from './Card';

const Wrapper = styled.div`
  flex-shrink: 0;
  width: 150px;

  @media screen and (min-width: ${config.viewport.md}) {
    width: 250px;
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyMessage = styled.p`
  color: #bbb;
`;

export default ({ value, onPreview, setMapCenter }: {
  value: Camera[],
  onPreview: (c: Camera) => void,
  setMapCenter: (latlng: LatLngExpression) => void
}) => (
  <Wrapper>
    <CardGroup>
      {value.map((v, i) =>
        <Card
          key={i}
          openPreviewModal={() => onPreview(v)}
          setMapCenter={() => setMapCenter([v.location.latitude, v.location.longitude])}
          {...v}
        />
      )}

      {!value.length &&
        <EmptyMessage>
          {locale.en.traffic.empty}
        </EmptyMessage>
      }
    </CardGroup>
  </Wrapper>
);