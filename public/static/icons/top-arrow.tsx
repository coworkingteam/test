import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
  width: 14px;

  margin-left: 20px;
`;

const TopArrow = () => {
  return (
    <Wrapper width='12' height='16' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.25 14.5C5.25 14.9142 5.58579 15.25 6 15.25C6.41421 15.25 6.75 14.9142 6.75 14.5L5.25 14.5ZM6.53033 0.96967C6.23744 0.676777 5.76256 0.676777 5.46967 0.96967L0.6967 5.74264C0.403806 6.03553 0.403806 6.51041 0.696699 6.8033C0.989593 7.09619 1.46447 7.09619 1.75736 6.8033L6 2.56066L10.2426 6.8033C10.5355 7.09619 11.0104 7.09619 11.3033 6.8033C11.5962 6.51041 11.5962 6.03553 11.3033 5.74264L6.53033 0.96967ZM6.75 14.5L6.75 1.5L5.25 1.5L5.25 14.5L6.75 14.5Z'
        fill='white'
      />
    </Wrapper>
  );
};

export default TopArrow;
