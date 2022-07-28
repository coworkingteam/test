import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Wrapper = styled.div<{ themeColor?: string }>`
  padding: 148px 0 80px 0;
  min-height: 50vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0px);

  background-color: ${({ theme, themeColor }) => themeColor || theme.colors.green100};

  @media screen and (max-width: 1250px) {
    padding: 80px 10px 80px 10px;
  }
`;

export const InnerWrapper = styled.div<{ themeColor?: string }>`
  max-width: 1450px;
  padding: 0 70px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0 0 56px 0;
  font-size: 52px;
  text-align: left;

  @media (max-width: 1250px) {
    font-size: 42px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Image = styled.img`
  max-width: 860px;
  height: 100%;
  max-height: 400px;
  margin-left: 44px;

  @media (max-width: 1250px) {
    margin: 44px 0 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: unset;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  max-width: 480px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1250px) {
    align-items: center;
    margin: 44px 0 0 0;
  }
`;

export const StrafeButton = styled(Link)<{ themeColor?: string }>`
  bottom: -26px;
  right: 50%;
  transform: translatex(50%);
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-color: ${({ themeColor }) => themeColor};
`;

export const ArrowDown = styled.img`
  height: 34px;
`;
