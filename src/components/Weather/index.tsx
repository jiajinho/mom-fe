import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Forecast } from 'api/weather/types';
import Card from './Card';
import Pagination from './Pagination';

const Wrapper = styled.div`
  position: relative;
  padding: 20px 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export default ({ value }: { value?: Forecast[] }) => {
  const [page, setPage] = useState(0);

  return (
    <Wrapper>
      <h2>Weather Forecasts</h2>

      <CardGroup>
        {value?.slice(page * 10, page * 10 + 10).map((v, i) =>
          <Card key={i} {...v} />
        )}
      </CardGroup>

      <Pagination
        maxItem={value?.length || 0}
        pageSize={10}
        page={[page, setPage]}
      />
    </Wrapper>
  );
}
