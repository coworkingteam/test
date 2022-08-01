import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  background-color: ${({ theme }) => theme.colors.black800};
`;

export const InnerWrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  margin: 150px auto;
  max-width: 1450px;
  padding: 0 70px;

  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  width: 100%;
  max-width: 1100px;
  opacity: 0.8;
  margin: 30px auto auto auto;

  color: ${({ theme }) => theme.colors.white};
`;

export const MessengersWrapper = styled.div`
  display: grid;
  grid-gap: 66px;
  margin-top: 80px;

  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(65px, 95px));
`;

export const Messenger = styled.img`
  max-width: 95px;
  max-height: 95px;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:first-child {
    max-height: 105px;
  }
`;
