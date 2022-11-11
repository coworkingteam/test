import styled from 'styled-components';

export const Wrapper = styled.div<{ hasTabs: boolean }>`
  //min-height: 100vh;
  height: 100%;
  max-width: 1450px;
  display: flex;
  padding: 0 70px;
  flex-direction: column;

  margin: ${({ hasTabs }) => (hasTabs ? 0 : 120)}px auto 120px auto;

  @media (max-width: 1250px) {
    padding: 0 10px;

    margin: 40px auto;
  }
`;
