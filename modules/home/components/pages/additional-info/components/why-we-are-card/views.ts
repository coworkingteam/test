import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  height: 100%;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  transition: all 450ms;

  background: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.02) perspective(1px);

    p {
      &:first-child {
        font-size: 28px;
      }
    }

    background: ${({ theme }) => theme.colors.blue100};
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 52px;
  transition: all 450ms;

  margin: 0 0 48px 0;
`;
export const Description = styled.p`
  font-size: 26px;
  line-height: 38px;
  margin: 0 0 48px 0;
`;
export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin: 0;
`;
