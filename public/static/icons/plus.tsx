import React from 'react';

interface Props {
  color?: string;
}

const Plus: React.FC<Props> = ({ color }) => (
  <svg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <line x1='16.5' y1='1.5' x2='16.5' y2='30.5' stroke={color || 'white'} strokeWidth='3' strokeLinecap='round' />
    <line x1='1.5' y1='15.5' x2='31.5' y2='15.5' stroke={color || 'white'} strokeWidth='3' strokeLinecap='round' />
  </svg>
);

export default Plus;
