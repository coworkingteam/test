import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0 70px;
  max-width: 1450px;
  margin: 92px auto;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 0 10px;

    margin: 50px auto;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 28px 0 28px 0;
  justify-content: center;

  display: grid;
  grid-gap: 28px;
  grid-template-rows: minmax(300px, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin: 0 0 26px 0;
  font-weight: 500;
  font-size: 62px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: left;
  }
`;

export const SubTitle = styled.h3`
  margin: 0 0 64px 0;
  font-weight: 400;
  font-size: 28px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    margin: 0 0 20px 0;
  }
`;
