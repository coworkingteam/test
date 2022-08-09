import styled from 'styled-components';

export const MenuWrapper = styled.div`
  padding: 42px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  height: 100%;
  background-color: ${({ theme }) => theme.colors.black600};
`;

export const MWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  ${({ theme }) => theme.templates.centerContent};

  div {
    padding: 6px 10px;
  }
`;

export const SWrapper = styled.div`
  flex-direction: column;
  ${({ theme }) => theme.templates.centerContent};
`;
