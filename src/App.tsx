import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
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
  position: relative;
  min-height: 100vh;
  padding: 10px 20px;
  background: var(--neutral-color);
  padding-bottom: 50px !important;

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

const Footnote = styled.a`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
`;


function App() {
  const lg = useViewportStore(state => state.lg);

  const map = useRef<L.Map>(null);

  const [date, setDate] = useState<Date>(new Date());
  const { forecast, cameras } = useFetchApi(date);

  const [visible, setVisible] = useState(false);
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    setTimeout(() => { map.current?.invalidateSize() }, 400);
  }, []);

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

        {!lg && <Weather value={forecast?.items[0]?.forecasts} />}

        <Content>
          <Section id="traffic">
            <h2>{locale.en.traffic.title}</h2>

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
              <h2>{locale.en.weather.title}</h2>
              <Weather value={forecast?.items[0]?.forecasts} />
            </Section>
          }
        </Content>

        <Footnote href="https://github.com/jiajinho/mom-fe">
          [Gthub Repo]
        </Footnote>

      </Wrapper>

      <PreviewModal
        visible={[visible, setVisible]}
        camera={camera}
      />
    </>
  );
}

export default App;
