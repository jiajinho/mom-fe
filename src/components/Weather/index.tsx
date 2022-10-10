import React, { useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import config from 'config';
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

  @media screen and (min-width: ${config.viewport.lg}) {
    padding: 0;
  }
`;

const CardGroup = styled.div`
  padding: 0 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: ${config.viewport.md}) {
    padding: 0 35px;
  }

  @media screen and (min-width: ${config.viewport.lg}) {
    padding: 0;
    width: 210px;
  }
`;

const EmptyMessage = styled.p`
  color: #bbb;
`;

export default ({ value }: { value?: Forecast[] }) => {
  const lg = useViewportStore(state => state.lg);

  const [page, setPage] = useState(0);

  const startIndex = page * config.weatherPageSize;
  const endIndex = startIndex + config.weatherPageSize;

  const filteredValue = lg ? value : value?.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {!lg && <h2>{locale.en.weather.title}</h2>}

      <CardGroup>
        {filteredValue?.map((v, i) =>
          <Card key={i} {...v} />
        )}

        {!filteredValue &&
          <EmptyMessage>
            {locale.en.weather.empty}
          </EmptyMessage>
        }
      </CardGroup>

      {!lg &&
        <Pagination
          maxItem={value?.length || 0}
          pageSize={config.weatherPageSize}
          page={[page, setPage]}
        />
      }
    </Wrapper>
  );
}
