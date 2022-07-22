import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;

  background-color: ${({ theme }) => theme.colors.black600};
`;

export const InnerWrapper = styled.div`
  display: flex;
  padding: 0 70px;
  max-width: 1450px;
  margin: 54px 0;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  button {
    height: 100%;
    max-height: 66px;
  }

  @media (max-width: 1000px) {
    max-width: unset;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  margin-left: 32px;
  max-width: 480px;

  @media (max-width: 1000px) {
    margin: 32px 0 0 0;
  }

  @media (max-width: 1000px) {
    max-width: unset;
  }
`;

export const Icon = styled.img`
  margin-left: 16px;
`;
