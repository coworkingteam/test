import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    min-height: unset;
  }
`;

export const InnerWrapper = styled.div`
  padding: 0 70px;
  width: 100%;
  max-width: 1450px;
  margin: 150px auto;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 80px auto;
  }
`;

export const Title = styled.p`
  font-size: 38px;
  font-weight: 500;
  line-height: 58px;
  margin: 0 0 132px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 62px 0;
  }
`;
