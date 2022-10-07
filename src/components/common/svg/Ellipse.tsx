import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;

  & circle {
    transition: 0.25s fill;
  }
`;

export default ({ color = "black", ...props }: {
  color?: string
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={41} height={41}
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20.9331" cy="20.1658" r={20} fill={color} />
  </Wrapper>
);