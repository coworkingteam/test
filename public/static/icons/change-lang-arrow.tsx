import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg<{ color?: string }>`
  margin-left: 8px;

  path {
    transition: all 0.2s ease;

    fill: ${({ color, theme }) => color || theme.colors.white};
  }
`;

interface Props {
  color?: string;
}

const ChangeLangArrow: React.FC<Props> = ({ color }) => (
  <Wrapper color={color} width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.28284 4.71716C5.12663 4.87337 4.87337 4.87337 4.71716 4.71716L0.682842 0.682842C0.430855 0.430856 0.609323 -1.84025e-07 0.965685 -2.13232e-07L9.03431 -8.74528e-07C9.39068 -9.03735e-07 9.56914 0.430856 9.31716 0.682842L5.28284 4.71716Z'
      fill='white'
    />
  </Wrapper>
);

export default ChangeLangArrow;
