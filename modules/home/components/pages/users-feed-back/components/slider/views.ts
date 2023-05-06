import styled from 'styled-components';

export const SliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  margin: 0 0 56px 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0 0 26px 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: none;
    text-align: center;
  }
`;

export const ArrowButtonsWrapper = styled.div`
  max-width: 95px;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
