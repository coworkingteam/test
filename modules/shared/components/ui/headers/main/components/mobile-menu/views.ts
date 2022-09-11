import styled from 'styled-components';

export const MenuWrapper = styled.div`
  padding: 60px 14px 0 14px;
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
  overflow-y: auto;
  width: 100%;

  div {
    padding: 6px 10px;
  }
`;

export const SWrapper = styled.div`
  padding: 14px 0;
  flex-direction: column;
  ${({ theme }) => theme.templates.centerContent};
`;
