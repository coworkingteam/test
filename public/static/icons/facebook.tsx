import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
  cursor: pointer;
  margin-right: 14px;

  path {
    transition: all 0.2s ease;
  }

  &:hover {
    path {
      fill: #3b5998;
    }
  }
`;

interface Props {
  onClick: () => void;
}

const FaceBookIcon: React.FC<Props> = ({ onClick }) => (
  <Wrapper onClick={onClick} width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_55_2154)'>
      <rect x='2.66797' y='1.83398' width='28' height='30.6667' fill='white' />
      <rect x='2.66797' y='1.83398' width='28' height='30.6667' fill='white' />
      <path
        d='M30.2338 0.5H1.76622C0.790667 0.5 0 1.29067 0 2.26622V30.7342C0 31.7093 0.790667 32.5 1.76622 32.5H17.092V20.108H12.9218V15.2787H17.092V11.7169C17.092 7.58356 19.6164 5.33333 23.3036 5.33333C25.0698 5.33333 26.5876 5.46444 27.0302 5.52356V9.84311L24.4729 9.84445C22.4676 9.84445 22.0796 10.7973 22.0796 12.1956V15.2791H26.8618L26.2391 20.1084H22.0796V32.5H30.2342C31.2093 32.5 32 31.7093 32 30.7338V2.26622C32 1.29067 31.2093 0.5 30.2338 0.5Z'
        fill='#212121'
      />
    </g>
    <defs>
      <clipPath id='clip0_55_2154'>
        <rect width='32' height='32' fill='white' transform='translate(0 0.5)' />
      </clipPath>
    </defs>
  </Wrapper>
);

export default FaceBookIcon;
