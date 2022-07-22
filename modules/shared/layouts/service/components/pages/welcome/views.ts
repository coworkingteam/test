import styled from 'styled-components';

export const Wrapper = styled.div<{ themeColor?: string }>`
  padding: 148px 0 30px 0;
  min-height: 50vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0px);
  overflow: hidden;

  background-color: ${({ theme, themeColor }) => themeColor || theme.colors.green100};

  @media screen and (max-width: 1250px) {
    padding: 80px 10px 40px 10px;
  }
`;

export const InnerWrapper = styled.div<{ themeColor?: string }>`
  max-width: 1450px;
  padding: 0 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0 0 40px 0;
  font-size: 52px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 1250px) {
    font-size: 42px;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 860px;
  height: 100%;
  max-height: 384px;
  margin-left: 44px;

  @media (max-width: 1250px) {
    margin: 44px 0 0 0;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  max-width: 324px;
  flex-direction: column;

  @media (max-width: 1250px) {
    margin: 44px 0 0 0;
  }
`;
