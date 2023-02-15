import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const Wrapper = styled.svg`
  width: 40px;
  margin: 0 44px 0 0;
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

const LeftButton: React.FC<Props> = ({ onClick }) => (
  <Wrapper onClick={onClick} width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM26 13.5H27.5V10.5H26V13.5ZM2 13.5H26V10.5H2V13.5Z'
      fill='#212121'
    />
    <path
      d='M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM26 13.5H27.5V10.5H26V13.5ZM2 13.5H26V10.5H2V13.5Z'
      fill='#212121'
    />
  </Wrapper>
);

export default LeftButton;
