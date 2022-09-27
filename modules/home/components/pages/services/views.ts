import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0 70px;
  max-width: 1450px;
  margin: 54px auto;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 0 10px;
    text-align: center;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 28px 0 28px 0;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  margin: 26px 0 26px 0;
  font-weight: 500;
  font-size: 62px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.p`
  margin: 0 0 64px 0;
  font-weight: 500;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
