import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const Wrapper = styled.svg`
  width: 40px;
  height: 14px;
  margin: 80px 0px 0px;
  cursor: pointer;

  path {
    transition: 0.2s ease all;
  }

  &:hover {
    path {
      fill: #f4b578 !important;
    }
  }
`;

const RightButton: React.FC<Props> = ({ onClick }) => (
  <Wrapper onClick={onClick} width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 10.5H0.5V13.5H2V10.5ZM27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM2 13.5H26V10.5H2V13.5Z'
      fill='#212121'
    />
    <path
      d='M2 10.5H0.5V13.5H2V10.5ZM27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM2 13.5H26V10.5H2V13.5Z'
      fill='#212121'
    />
  </Wrapper>
);

export default RightButton;
