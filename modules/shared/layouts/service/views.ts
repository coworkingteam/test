import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const TabItemsContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 32px;
  position: relative;
  margin: 75px auto 32px auto;
`;

export const TabItemsWrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  z-index: 99;

  border-radius: 0 0 20px 20px;
  margin: ${({ isScroll }) => isScroll && '78px auto 32px auto'};
  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'relative')};
  transition: ${({ isScroll }) => isScroll && 'background-color 0.2s ease'};
  box-shadow: ${({ isScroll, theme }) => isScroll && theme.templates.boxShadow};
  background-color: ${({ isScroll, theme }) => isScroll && theme.colors.white};

  @media (max-width: 1100px) {
    margin: ${({ isScroll }) => isScroll && '66px auto 32px auto'};
  }
`;

export const InnerTabItemsWrapper = styled.div<{ isScroll: boolean }>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  max-width: 1450px;
  margin: 0 auto;
  padding: ${({ isScroll }) => (isScroll ? '16px 70px' : '0 70px')};

  @media (max-width: 1100px) {
    justify-content: center;

    padding: ${({ isScroll }) => (isScroll ? '16px 15px' : '0 15px')};
  }
`;
