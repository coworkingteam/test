import styled from 'styled-components';

export const SliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 52px;
  margin: 0 0 50px 0;
  max-width: 154px;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    font-size: 32px;
    max-width: none;
    text-align: center;
  }
`;

export const ArrowButtonsWrapper = styled.div`
  max-width: 95px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
