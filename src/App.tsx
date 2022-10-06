import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

import type { LatLngExpression } from 'leaflet';
import type { Camera } from 'types';
import useFetchApi from 'hooks/useFetchApi';

import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';
import Cameras from 'components/Cameras';
import Leaflet from 'components/Leaflet';
import PreviewModal from 'components/PreviewModal';

const Wrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding: 10px 20px;

  background: var(--neutral-color);
`;

const Container = styled.div`
  display: flex;
  
`;

function App() {
  const map = useRef<L.Map>(null);

  const [date, setDate] = useState<Date>(new Date());
  const { forecast, cameras } = useFetchApi(date);

  const [visible, setVisible] = useState(false);
  const [camera, setCamera] = useState<Camera>();

  const handlePreview = (c: Camera) => {
    setCamera(c);
    setVisible(true);
  }

  const setMapCenter = (latlng: LatLngExpression) => {
    map.current?.setView(latlng, 15);
  }

  return (
    <>
      <Wrapper>
        <DatePicker
          selected={date}
          onChange={setDate}
        />

        <Weather value={forecast?.items[0]?.forecasts} />

        <Container>
          <Cameras
            value={cameras}
            onPreview={handlePreview}
            setMapCenter={setMapCenter}
          />

          <Leaflet
            ref={map}
            value={cameras}
            onMarkerClick={handlePreview}
          />
        </Container>

      </Wrapper>

      <PreviewModal
        visible={[visible, setVisible]}
        camera={camera}
      />
    </>
  );
}

export default App;
