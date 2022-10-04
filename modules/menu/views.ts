import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1450px;
  margin: 140px auto;
  justify-content: center;
  flex-direction: column;
  padding: 0 70px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Title = styled.p`
  margin: 40px 0;
  font-size: 64px;
  font-weight: 500;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    text-align: center;
  }
`;
