import React from 'react';
import styled from 'styled-components/macro';

type Direction = "up" | "down" | "left" | "right";

export const Wrapper = styled.svg(({ $deg }: { $deg: number }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;

  transform: rotateZ(${$deg}deg);
`);

export default ({ color = "var(--secondary-color)", direction = "up", ...props }: {
  color?: string,
  direction?: Direction
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => {

  let deg = 0;

  switch (direction) {
    case "down": deg = 180; break;
    case "left": deg = 270; break;
    case "right": deg = 90; break;
  }

  return (
    <Wrapper
      {...props}
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $deg={deg}
    >
      <path
        d="M414 321.94L274.22 158.82C271.967 156.192 269.172 154.083 266.027 152.637C262.882 151.19 259.462 150.442 256 150.442C252.538 150.442 249.118 151.19 245.973 152.637C242.828 154.083 240.033 156.192 237.78 158.82L98 321.94C84.66 337.51 95.72 361.56 116.22 361.56H395.82C416.32 361.56 427.38 337.51 414 321.94Z"
        fill={color}
      />
    </Wrapper>
  );
}