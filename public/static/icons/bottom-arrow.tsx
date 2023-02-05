import React from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  isActive?: boolean;
}

const WrapperSVG = styled.svg<{ isActive: boolean }>`
  transition: 0.2s all ease;

  rotate: ${({ isActive }) => (isActive ? '180deg' : '0')};
`;

const Minus: React.FC<Props> = ({ color, isActive }) => (
  <WrapperSVG
    isActive={!!isActive}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.46125 5.28931C3.18202 4.98337 2.66772 4.90809 2.31252 5.12119C1.95732 5.33428 1.89574 5.75504 2.17497 6.06099L8.24364 12.7102C8.42959 12.914 8.71977 13.0154 8.9978 12.9975C9.27583 13.0154 9.56602 12.914 9.75196 12.7102L15.8206 6.06099C16.0999 5.75504 16.0383 5.33428 15.6831 5.12119C15.3279 4.90809 14.8136 4.98337 14.5343 5.28931L8.9978 11.3555L3.46125 5.28931Z'
      fill={color || '#212121'}
    />
  </WrapperSVG>
);

export default Minus;
