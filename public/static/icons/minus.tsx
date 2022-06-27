import React from 'react';

interface Props {
  color?: string;
}

const Minus: React.FC<Props> = ({ color }) => (
  <svg width='31' height='3' viewBox='0 0 31 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <line x1='1.5' y1='1.5' x2='29.5' y2='1.5' stroke={color || 'white'} strokeWidth='3' strokeLinecap='round' />
  </svg>
);

export default Minus;
