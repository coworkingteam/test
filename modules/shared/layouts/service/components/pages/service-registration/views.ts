import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  max-width: 1450px;
  display: flex;
  padding: 0 70px;
  margin: 120px auto;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1250px) {
    padding: 0 10px;

    margin: 40px auto;
  }
`;
