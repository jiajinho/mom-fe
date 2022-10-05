import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;

  & path {
    transition: 0.2s fill;
  }
`;

export default ({ color = "black", ...props }: {
  color?: string
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={473}
    height={473}
    viewBox="0 0 473 473"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_32_6)">
      <path
        d="M0 29.364V443.251H472.615V29.364H0ZM134.754 101.162C157.411 101.162 175.779 119.53 175.779 142.188C175.779 164.846 157.411 183.213 134.754 183.213C112.096 183.213 93.728 164.846 93.728 142.188C93.728 119.53 112.097 101.162 134.754 101.162ZM423.383 394.017H49.229V340.409L132.748 256.892L183.998 308.145L325.762 166.384L423.383 264.005V394.017Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_32_6">
        <rect width="472.615" height="472.615" fill="transparent" />
      </clipPath>
    </defs>
  </Wrapper>
);