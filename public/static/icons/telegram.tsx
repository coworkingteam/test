import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  cursor: pointer;
  width: 95px;
  height: 95px;
  transition: 250ms all ease;

  path {
    transition: 250ms all ease;
  }
  stop {
    transition: 250ms all ease;
  }

  &:hover {
    path {
      &:first-child {
        fill: ${({ theme }) => theme.colors.white};
      }

      &:last-child {
        fill: #2aabee;
      }
    }
  }
`;

const TelegramIcon = () => (
  <Wrapper width='107' height='107' viewBox='0 0 107 107' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_2805_256)'>
      <path
        d='M53.5 107C83.0472 107 107 83.0472 107 53.5C107 23.9528 83.0472 0 53.5 0C23.9528 0 0 23.9528 0 53.5C0 83.0472 23.9528 107 53.5 107Z'
        fill='url(#paint0_linear_2805_256)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.2171 52.9353C39.8134 46.1402 50.2135 41.6604 55.417 39.4962C70.2746 33.3165 73.3619 32.2429 75.374 32.2074C75.8166 32.1997 76.8062 32.3094 77.4471 32.8296C78.398 33.6011 78.4034 35.2759 78.2979 36.3844C77.4927 44.8441 74.0089 65.3732 72.2365 74.8482C71.4865 78.8573 70.0098 80.2017 68.5803 80.3332C65.4736 80.6191 63.1143 78.2799 60.1052 76.3075C55.3965 73.2208 52.7364 71.2994 48.1657 68.2875C42.8836 64.8067 46.3078 62.8936 49.318 59.767C50.1059 58.9488 63.7946 46.4978 64.0596 45.3682C64.0928 45.2269 64.1235 44.7003 63.8107 44.4223C63.4978 44.1444 63.0362 44.2393 62.703 44.3149C62.2307 44.4221 54.7086 49.3941 40.1365 59.2305C38.0013 60.6968 36.0674 61.4111 34.3347 61.3737C32.4243 61.3325 28.75 60.2937 26.0183 59.4057C22.6679 58.3167 20.005 57.7407 20.237 55.8912C20.3578 54.9276 21.6844 53.9424 24.2171 52.9353Z'
        fill='white'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_2805_256'
        x1='53.5'
        y1='0'
        x2='53.5'
        y2='106.164'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2AABEE' />
        <stop offset='1' stopColor='#229ED9' />
      </linearGradient>
      <clipPath id='clip0_2805_256'>
        <rect width='107' height='107' fill='white' />
      </clipPath>
    </defs>
  </Wrapper>
);

export default TelegramIcon;
