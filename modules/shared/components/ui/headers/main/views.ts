import styled from 'styled-components';

export const Wrapper = styled.div<{ isScroll: boolean }>`
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: all 0.4s ease 0s;

  padding: ${({ isScroll }) => (isScroll ? '15px 70px' : '58px 70px')};
  background-color: ${({ isScroll }) => isScroll && 'rgba(255, 255, 255, .75)'};

  @media (max-width: 768px) {
    padding: ${({ isScroll }) => (isScroll ? '15px 15px' : '20px 15px')};
  }
`;

export const IWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 auto;
`;

export const LWrapper = styled.div`
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
  justify-content: center;

  ${({ theme }) => theme.templates.centerItems};
`;

export const LogoText = styled.p`
  font-weight: 500;
  font-size: 26px;
  margin: 0 0 0 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
