import React from 'react';
import styled from 'styled-components/macro';

import CaretUp, { Wrapper as $CaretUp } from 'components/common/svg/CaretUp';
import Ellipse, { Wrapper as $Ellipse } from 'components/common/svg/Ellipse';

const Wrapper = styled.div`
  margin-top: 20px;
  
  ${$CaretUp} { height: 20px }
`;

const CaretContainer = styled.span(({ $disable }: {
  $disable: boolean
}) => `
  user-select: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  cursor: ${$disable ? "not-allowed" : "pointer"};

  &#left { left: 0 }
  &#right { right: 0 }
`);

const CircleGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Circle = styled.span`
  padding: 3px;
  cursor: pointer;

  ${$Ellipse} {
    height: 10px;
  }
`;

export default ({ maxItem, pageSize, page }: {
  maxItem: number,
  pageSize: number,
  page: [number, (n: number) => void]
}) => {
  const maxPage = Math.ceil(maxItem / pageSize);

  const goPrevPage = () => {
    if (--page[0] < 0) return;
    page[1](page[0]);
  }

  const goNextPage = () => {
    if (++page[0] >= maxPage) return;
    page[1](page[0]);
  }

  return (
    <Wrapper>
      <CaretContainer id="left" onClick={goPrevPage} $disable={page[0] <= 0}>
        <CaretUp
          direction="left"
          color={page[0] <= 0 ? "#ddd" : "var(--secondary-color)"}
        />
      </CaretContainer>

      <CaretContainer id="right" onClick={goNextPage} $disable={page[0] >= maxPage - 1}>
        <CaretUp
          direction="right"
          color={page[0] >= maxPage - 1 ? "#ddd" : "var(--secondary-color)"}
        />
      </CaretContainer>


      <CircleGroup>
        {Array.from(Array(maxPage).keys()).map((v) =>
          <Circle key={v} onClick={() => page[1](v)}>
            <Ellipse color={page[0] === v ? "var(--secondary-color)" : "#ddd"} />
          </Circle>
        )}
      </CircleGroup>
    </Wrapper>
  );
}