import React from 'react';
import styled from 'styled-components/macro';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

import type { Camera } from 'types';

const defaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41]
});

export const Wrapper = styled.div`
  flex-grow: 1;
  position: sticky;
  top: 0;

  height: 100vh;
  width: 100%;
`;

const LeafletContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;

  & .leaflet-popup { bottom: 36px !important }
`;

export default React.forwardRef(({ value, onMarkerClick }: {
  value: Camera[],
  onMarkerClick: (c: Camera) => void
},
  ref: React.ForwardedRef<L.Map>
) => (
  <Wrapper>
    <LeafletContainer ref={ref} center={[1.3581487354888908, 103.8186384701943]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {value.map((v, i) =>
        <Marker
          key={i}
          position={[v.location.latitude, v.location.longitude]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onMarkerClick(v)
          }}
        />
      )}
    </LeafletContainer>
  </Wrapper>
));