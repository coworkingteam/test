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

export const RWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.templates.centerItems};

  div {
    padding: 6px 10px;
  }
`;
