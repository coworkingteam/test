import styled from 'styled-components';

export const SliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 0 0 50px 0;
  color: #212121;
  display: block;
  width: max-content;

  @media (max-width: 768px) {
    margin: 0 0 26px 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 52px;
  max-width: 300px;
  width: max-content;

  @media (max-width: 768px) {
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
