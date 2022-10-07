import React from 'react';
import styled from 'styled-components/macro';
import { LatLngExpression } from 'leaflet';

import { Camera } from 'types';
import Card from './Card';

const Wrapper = styled.div`

`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
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
    </CardGroup>
  </Wrapper>
);