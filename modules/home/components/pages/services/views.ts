import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0 0;

  background-color: ${({ theme }) => theme.colors.black600};
`;

export const InnerWrapper = styled.div`
  display: flex;
  padding: 0 70px;
  max-width: 1450px;
  margin: 54px 0;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  max-width: 740px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  button {
    height: 100%;
    max-height: 66px;
  }

  > div {
    padding-right: 136px;
  }

  @media (max-width: 1200px) {
    max-width: unset;

    > div {
      padding-right: 20px;
    }
  }
`;

export const RightSide = styled.div`
  width: 100%;
  margin-left: 32px;
  max-width: 530px;

  @media (max-width: 1200px) {
    margin: 32px 0 0 0;
    max-width: unset;
  }
`;

export const Icon = styled.img`
  margin-right: 16px;
`;
