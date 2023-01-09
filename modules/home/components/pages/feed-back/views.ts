import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  height: 100%;
  display: flex;

  background-color: ${({ theme }) => theme.colors.black600};
`;

export const InnerWrapper = styled.div`
  height: 100%;
  padding: 0 70px;
  margin: 60px auto;
  max-width: 1450px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10px;
    text-align: left;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.p`
  width: 100%;
  opacity: 0.8;
  font-size: 18px;
  max-width: 1100px;
  margin: 30px auto auto auto;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MessengersWrapper = styled.div`
  display: grid;
  grid-gap: 66px;
  margin-top: 80px;

  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(65px, 95px));

  svg {
    max-width: 80px;
    max-height: 80px;
  }
`;
