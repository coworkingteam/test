import React from 'react';
// views
import { Background, Wrapper, Progress, PWrapper } from './views';

interface Props {
  percent: number;
  backgroundColor?: string;
  progressColor?: string;
}

const ProgressBar: React.FC<Props> = ({ percent, backgroundColor, progressColor }) => {
  const correctPercents = percent > 100 ? 100 : percent;

  return (
    <Wrapper>
      <PWrapper>
        <Background backgroundColor={backgroundColor} />
        <Progress progressColor={progressColor} percent={correctPercents} />
      </PWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
