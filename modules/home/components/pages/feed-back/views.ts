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
  margin: 150px auto;
  max-width: 1450px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 76px auto;
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
  width: 100%;
  opacity: 0.8;
  font-size: 18px;
  max-width: 1100px;
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
  width: 95px;
  height: 95px;
  cursor: pointer;
  transition: 250ms all ease;

  &:first-child {
    height: 105px;
  }

  &:hover {
    transform: translate3d(0, -4px, 0);
  }
`;
