import React from 'react';
import styled from 'styled-components/macro';
import { LatLngExpression } from 'leaflet';

import { Camera } from 'types';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ({ value, onPreview, setMapCenter }: {
  value: Camera[],
  onPreview: (c: Camera) => void,
  setMapCenter: (latlng: LatLngExpression) => void
}) => (
  <Wrapper>
    {value.sort((a, b) => a > b ? -1 : 1).map((v, i) =>
      <Card
        key={i}
        openPreviewModal={() => onPreview(v)}
        setMapCenter={() => setMapCenter([v.location.latitude, v.location.longitude])}
        {...v}
      />
    )}
  </Wrapper>
);