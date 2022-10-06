import React from 'react';
import styled from 'styled-components/macro';
import { LatLngExpression } from 'leaflet';

import { Camera } from 'types';
import Card from './Card';

const Wrapper = styled.div`

`;

export default ({ value, onPreview, setMapCenter }: {
  value: Camera[],
  onPreview: (c: Camera) => void,
  setMapCenter: (latlng: LatLngExpression) => void
}) => (
  <Wrapper>
    {value.map((v, i) =>
      <Card
        key={i}
        onImageIconClick={() => onPreview(v)}
        onGlobeClick={() => setMapCenter([v.location.latitude, v.location.longitude])}
        {...v}
      />
    )}
  </Wrapper>
);