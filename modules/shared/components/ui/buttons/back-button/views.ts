import styled from 'styled-components';

export const BackIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const BackTitle = styled.p`
  margin: 0 0 0 8px;
  font-weight: 500;
  text-decoration-line: underline;

  color: ${({ theme }) => theme.colors.gray550};
  ${({ theme }) => theme.templates.dynamicFont({ minSize: 12, maxSize: 20, maxViewport: 2000, minViewport: 320 })};
`;

export const BackButtonWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  transition: all 0.2s ease;

  background: rgba(198, 198, 198, 0.2);

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    left: 10px;
  }
`;
