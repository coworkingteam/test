import styled from 'styled-components';

interface ProgressProps {
  percent: number;
  progressColor?: string;
}

export const PWrapper = styled.div`
  height: 6px;
  position: relative;
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 3px;
  width: 100%;
  transition: width 2s ease-in-out;
`;

export const Background = styled(BaseBox)<{ backgroundColor?: string }>`
  width: 100%;
  height: 1px;
  top: 1.2px;

  background: ${({ theme, backgroundColor }) => backgroundColor || theme.colors.gray180};
`;

export const Progress = styled(BaseBox)<ProgressProps>`
  width: ${({ percent }) => percent}%;
  display: flex;
  height: 3px;
  justify-content: flex-end;
  align-items: center;

  background: ${({ theme, progressColor }) => progressColor || theme.colors.black600};
`;
