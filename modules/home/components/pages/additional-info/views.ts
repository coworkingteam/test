import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black600};
`;

export const InnerWrapper = styled.div`
  display: flex;
  max-width: 1450px;
  padding: 0 70px;
  width: 100%;
  margin: 68px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
