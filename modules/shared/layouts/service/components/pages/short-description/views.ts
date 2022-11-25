import styled from 'styled-components';

export const Wrapper = styled.div<{ themeColor?: string }>`
  height: 100%;
  padding: 44px 0;
  overflow: hidden;
  max-height: 424px;
  position: relative;
  margin-bottom: 120px;
  transform: translateZ(0px);

  ${({ theme }) => theme.templates.centerContent}
  background-color: ${({ theme, themeColor }) => themeColor || theme.colors.green100};
`;

export const InnerWrapper = styled.div`
  max-width: 1450px;
  display: flex;
  width: 100%;
  padding: 0 70px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
