import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'types';
import Card from './Card';
import PreviewModal from './PreviewModal';

const Wrapper = styled.div`

`;

export default ({ value }: { value: Camera[] }) => {

  const [visible, setVisible] = useState(false);
  const [camera, setCamera] = useState<Camera>();

  const handleImageIconClick = (c: Camera) => {
    setCamera(c);
    setVisible(true);
  }

  return (
    <>
      <Wrapper>
        {value.map((v, i) =>
          <Card
            key={i}
            onImageIconClick={() => handleImageIconClick(v)}
            {...v}
          />
        )}
      </Wrapper>

      <PreviewModal
        visible={[visible, setVisible]}
        camera={camera}
      />
    </>
  );
}