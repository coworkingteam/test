import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  max-width: 1450px;
  padding: 0 70px;
  margin: 180px auto;
  flex-direction: column;
  text-align: center;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  width: 100%;
  max-width: 1100px;
  margin: 30px 0 0 0;

  color: ${({ theme }) => theme.colors.gray550};
`;

export const MessengersWrapper = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const Messenger = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  margin-right: 66px;

  &:last-child {
    margin: 0;
  }
`;
