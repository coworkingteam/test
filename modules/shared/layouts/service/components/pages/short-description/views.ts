import styled from 'styled-components';

export const Wrapper = styled.div<{ themeColor?: string }>`
  padding: 44px 0;
  position: relative;
  max-height: 424px;
  height: 100%;
  margin-bottom: 120px;
  transform: translateZ(0px);
  overflow: hidden;

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
    align-items: center;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0 0 20px 0;
  font-size: 52px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  margin: 0 0 68px 0;
  font-size: 38px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
