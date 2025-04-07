import React, { useMemo } from 'react';
import * as S from './styled';
import { Leaf } from '../Leaf';
import { generateRandomLeaves } from '../../../features/generateRandomLeaves/generateRandomLeaves';
import { RouterPath } from '../../../enums/routers';

export const Logo: React.FC = () => {
  const greens = [
    '#66BB6A',
    '#4CAF50',
    '#81C784',
    '#388E3C',
    '#43A047',
    '#a2e92f',
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const leaves = useMemo(() => generateRandomLeaves(4, greens, 3), []);

  return (
    <S.WrapperLogo>
      <S.LogoTitle to={RouterPath.Root}>AGROTRADE</S.LogoTitle>
      {leaves.map(({ key, left, delay, duration, color, rotate }) => (
        <Leaf
          key={key}
          left={left}
          delay={delay}
          duration={duration}
          color={color}
          rotate={rotate}
        />
      ))}
    </S.WrapperLogo>
  );
};
