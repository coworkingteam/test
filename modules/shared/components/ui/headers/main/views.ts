import styled from 'styled-components';

export const Wrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: all 0.4s ease 0s;

  backdrop-filter: ${({ isScroll }) => isScroll && 'blur(8px)'};
  box-shadow: ${({ isScroll, theme }) => isScroll && theme.templates.boxShadow};
  padding: ${({ isScroll }) => (isScroll ? '0 70px' : '46px 70px')};
  background-color: ${({ isScroll }) => isScroll && 'rgba(255, 255, 255, 0.85)'};

  @media (max-width: 768px) {
    padding: ${({ isScroll }) => (isScroll ? '15px 15px' : '20px 15px')};
  }
`;

export const IWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: space-between;

    button {
      display: none;
    }
  }
`;

export const BurgerIcon = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  margin-right: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LWrapper = styled.div`
  cursor: pointer;

  img {
    height: 36px;
    width: 36px;
  }

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    img {
      height: 26px;
      width: 26px;
    }
  }
`;

export const RWrapper = styled.div`
  flex: 1;
  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
`;
