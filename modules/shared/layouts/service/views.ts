import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const TabItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  max-width: 1450px;
  margin: 75px auto 32px auto;
  padding: 0 70px;
`;

export const InnerTabItemsWrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: all 0.4s ease 0s;
  margin-top: 86px;
  box-shadow: ${({ isScroll }) => isScroll && 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'};

  padding: ${({ isScroll }) => (isScroll ? '15px 70px' : '46px 70px')};
  background-color: ${({ isScroll }) => isScroll && 'rgba(255, 255, 255, 0.95)'};

  @media (max-width: 1100px) {
    padding: ${({ isScroll }) => (isScroll ? '15px 15px' : '20px 15px')};
  }
`;
