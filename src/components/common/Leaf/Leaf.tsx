import React from 'react';
import * as S from './styled';

export const Leaf: React.FC<{
  left: string;
  delay: string;
  duration: string;
  color: string;
  rotate: string;
}> = ({ left, delay, duration, color, rotate }) => {
  return (
    <S.Leaf viewBox="0 0 24 24" left={left} delay={delay} duration={duration}>
      <S.LeafPath
        rotate={rotate}
        d="M12 2C9 6 6 10 9 14c2 3 6 3 8 0 3-4 0-8-5-12z"
        fillColor={color}
      />
    </S.Leaf>
  );
};
