import React from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'types';
import Card from './Card';

const Wrapper = styled.div`

`;

export default ({ value, onPreview }: {
  value: Camera[],
  onPreview: (c: Camera) => void
}) => (
  <Wrapper>
    {value.map((v, i) =>
      <Card
        key={i}
        onImageIconClick={() => onPreview(v)}
        {...v}
      />
    )}
  </Wrapper>
);