import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

import config from 'config';
import type { LatLngExpression } from 'leaflet';
import type { Camera } from 'types';
import useFetchApi from 'hooks/useFetchApi';
import useViewportStore from 'stores/useViewportStore';

import DatePicker from 'components/common/DatePicker';
import Weather from 'components/Weather';
import Cameras from 'components/Cameras';
import Leaflet from 'components/Leaflet';
import PreviewModal from 'components/PreviewModal';

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 10px 20px;
  background: var(--neutral-color);

  @media screen and (min-width: ${config.viewport.md}) {
    padding: 10px 40px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 30px;
`;

const Section = styled.div`
  margin-top: 40px;

  &#traffic { flex-grow: 1 }
  & > h2 { margin-bottom: 15px }

  @media screen and (min-width: ${config.viewport.lg}) {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: start;
`;


function App() {
  const lg = useViewportStore(state => state.lg);

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
    map.current?.setView(latlng, 14);
  }

  return (
    <>
      <Wrapper>
        <DatePicker
          selected={date}
          onChange={setDate}
        />

        {!lg && <Weather value={forecast?.items[0]?.forecasts} />}

        <Content>
          <Section id="traffic">
            <h2>Traffic Cameras</h2>

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
          </Section>

          {lg &&
            <Section>
              <h2>Weather Forecast</h2>
              <Weather value={forecast?.items[0]?.forecasts} />
            </Section>
          }
        </Content>

      </Wrapper>

      <PreviewModal
        visible={[visible, setVisible]}
        camera={camera}
      />
    </>
  );
}

export default App;
