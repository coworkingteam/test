import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  margin: 100px auto;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 80px auto;
  }
`;

export const Title = styled.h2`
  margin: 0 0 26px 0;
  font-weight: 500;
  font-size: 62px;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: left;
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
