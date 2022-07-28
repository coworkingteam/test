import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const TabItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1450px;
  margin: 75px auto 32px auto;
  padding: 0 70px;
`;
export const Button = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: aqua;
`;
export const StrafeButton = styled(Button)`
  bottom: -40px;
`;
