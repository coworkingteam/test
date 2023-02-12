import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ showBreadcrumb: boolean }>`
  height: 40px;
  display: flex;
  margin: 0;
  overflow: hidden;
  padding: 8px 0 14px 0;
  align-items: center;
  opacity: 1;
  transition: all 0.4s ease 0s;

  ${({ showBreadcrumb }) =>
    !showBreadcrumb &&
    css`
      height: 0;
      opacity: 0;
      padding: 0;
    `};

  @media screen and (max-width: 768px) {
    padding: 16px 0 0 0;
    height: 32px;

    ${({ showBreadcrumb }) =>
      !showBreadcrumb &&
      css`
        height: 0;
        padding: 0;
      `};
  }
`;

export const BreadcrumbName = styled.p<{ isLastChild?: boolean; isScroll: boolean }>`
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.4s ease 0s;
  max-width: 40%;

  ${({ theme }) => theme.templates.ellipsis}
  cursor: ${({ isLastChild }) => !isLastChild && 'pointer'};
  font-size: ${({ isScroll }) => (isScroll ? '14' : '16')}px;
  color: ${({ theme, isLastChild }) => (isLastChild ? theme.colors.black600 : theme.colors.gray560)};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const BackIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
