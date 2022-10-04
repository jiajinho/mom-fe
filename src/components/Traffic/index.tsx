import React from 'react';
import styled from 'styled-components/macro';

import { Camera } from 'api/traffic/types';

const Wrapper = styled.div`

`;

const CardGroup = styled.div`
`;

export default ({ value }: {
  value?: Camera[]
}) => {

  console.log(value);

  return (
    <Wrapper>
      <h2>Traffics</h2>

      <CardGroup>
        2
      </CardGroup>
    </Wrapper>
  );
}