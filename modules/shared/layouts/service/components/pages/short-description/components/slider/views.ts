import styled from 'styled-components';

export const DotWrapper = styled.div`
  width: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DotInnerWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 10px;
`;

export const Dot = styled.div<{ isActive: boolean }>`
  width: 54px;
  height: 0;
  cursor: pointer;
  border-radius: 10px;
  border: ${({ isActive }) => (isActive ? '2px solid #212121' : '2px solid #FFFFFF')};
`;
