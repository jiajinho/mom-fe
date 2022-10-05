import React from 'react';
import styled from 'styled-components/macro';
import useAnimation from './useAnimation';

const Wrapper = styled.div`
  position: relative;
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
  
  margin-bottom: 6px;
  padding: 5px 7px;
  border-radius: 4px;
  background: black;
  color: white;

  transform-origin: center bottom;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    border-style: solid;
    border-width: 5px 3px;
    border-color: transparent;
    border-top-color: black;
  }

  & > p { font-size: 10px }
`;

export default ({ text, children }: {
  text: string,
  children: string | JSX.Element
}) => {
  const refs = useAnimation();

  return (
    <Wrapper ref={refs.wrapper}>
      <Tooltip ref={refs.tooltip}>
        <p>{text}</p>
      </Tooltip>

      {children}
    </Wrapper>
  );
}