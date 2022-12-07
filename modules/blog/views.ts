import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: unset;
  }
`;

export const InnerWrapper = styled.div`
  padding: 0 70px;
  width: 100%;
  max-width: 1450px;
  margin: 200px auto;
  display: grid;
  gap: 30px 20px;
  justify-content: center;
  grid-template-columns: repeat(1, minmax(300px, 680px));

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
