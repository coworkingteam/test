import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  max-width: 1450px;
  display: flex;
  padding: 0 70px;
  margin: 112px auto;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
