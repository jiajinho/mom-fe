import React from 'react';
import styled from 'styled-components/macro';
import { format } from 'date-fns';

import config from 'config';
import type { Camera } from 'types';

import Modal, { Wrapper as $Modal } from 'components/common/Modal';

const Wrapper = styled.div`
  ${$Modal} { 
    width: 100%;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    ${$Modal} { max-width: 90vmin }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p { font-size: 12px }
`;

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  padding-bottom: 7px;

  p { margin-top: 3px }
`;

const Image = styled.img(({ $aspectRatio }: {
  $aspectRatio?: number
}) => `
  aspect-ratio: ${$aspectRatio || 1};
  width: 100%;
  height: auto;
`);

const Footer = styled.footer`
  border-top: 1px solid #ccc;
  padding-top: 7px;

  display: grid;
  grid-template-columns: 100px 1fr;

  row-gap: 3px;
`;

export default ({ visible, camera }: {
  visible: [boolean, (b: boolean) => void],
  camera?: Camera
}) => {

  const lastUpdated = camera?.lastUpdated ?
    format(new Date(camera?.lastUpdated), config.format.datetime.client) :
    "";

  return (
    <Wrapper>
      <Modal visible={visible}>
        <Container>
          <Header>
            <h2>{camera?.area.name}</h2>
            <p>{camera?.area.weather}</p>
          </Header>

          <Image
            src={camera?.url}
            $aspectRatio={camera?.aspectRatio}
          />

          <Footer>
            <p>Camera ID</p>
            <p>{camera?.id}</p>

            <p>Lat/long</p>
            <p>{camera?.location.latitude}, {camera?.location.longitude}</p>

            <p>Last updated</p>
            <p>{lastUpdated}</p>
          </Footer>
        </Container>
      </Modal>
    </Wrapper>
  );
}