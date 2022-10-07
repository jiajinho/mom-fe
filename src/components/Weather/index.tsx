import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Forecast } from 'api/weather/types';
import Card from './Card';
import Pagination from './Pagination';
import useViewportStore from 'stores/useViewportStore';

const Wrapper = styled.div`
  position: relative;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardGroup = styled.div`
  padding: 0 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export default ({ value }: { value?: Forecast[] }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // useEffect(() => {
  //   const handleResize = () => {

  //   }


  // }, []);

  return (
    <Wrapper>
      <h2>Weather Forecasts</h2>

      <CardGroup>
        {value?.slice(page * pageSize, page * pageSize + pageSize).map((v, i) =>
          <Card key={i} {...v} />
        )}
      </CardGroup>

      <Pagination
        maxItem={value?.length || 0}
        pageSize={pageSize}
        page={[page, setPage]}
      />
    </Wrapper>
  );
}
