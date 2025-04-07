import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const floatUp = keyframes`
  0% {
    transform: translateY(100%) scale(0.6); /* rotate не трогаем */
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%) scale(0.6);
    opacity: 0;
  }
`;
export const Leaf = styled.svg<{
  left: string;
  delay: string;
  duration: string;
}>`
  position: absolute;
  pointer-events: none;
  z-index: 0;
  bottom: 0;
  left: ${({ left }) => left};
  width: 15px;
  height: 20px;
  opacity: 0;
  transform: translateY(100%) scale(0.6);
  animation: ${floatUp} ${({ duration }) => duration} ease-in-out
    ${({ delay }) => delay} infinite;
  z-index: 1;
`;

export const LeafPath = styled.path<{
  fillColor: string;
  rotate: string;
}>`
  fill: ${({ fillColor }) => fillColor};
  transform-origin: center;
  transform-box: fill-box;
  transform: ${({ rotate }) => `rotate(${rotate})`};
`;
