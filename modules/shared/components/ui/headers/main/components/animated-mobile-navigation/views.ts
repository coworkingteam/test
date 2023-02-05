import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  position: relative;
  margin-left: 44px;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Background = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  z-index: 9999;
  transition: all 800ms cubic-bezier(0.86, 0, 0.07, 1);

  background: ${({ theme }) => theme.colors.black600};

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: scale(100);
    `};
`;

export const NavigationWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;

  width: 0;
  visibility: hidden;
  z-index: 99999;
  transition: all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 100%;
      visibility: visible;
      opacity: 1;
    `};
`;

export const NavigationListWrapper = styled.div`
  position: absolute;
  top: 50%;
  height: 100%;
  padding: 20px 50px;
  display: flex;

  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  list-style: none;
  flex-direction: column;
`;

export const ItemListWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  display: flex;
`;

export const Title = styled.p`
  margin: 20px 0;
  width: max-content;
  font-weight: 500;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const Icon = styled.img`
  margin-left: 8px;
  width: 16px;
`;

export const NavigationButton = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  z-index: 999999;
  cursor: pointer;

  ${({ theme }) => theme.templates.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NavigationIcon = styled.span<{ isOpen: boolean }>`
  position: relative;

  &,
  &:before,
  :after {
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #4a676a;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 200ms;
  }

  &:before {
    top: -6px;
  }

  &:after {
    top: 6px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      & {
        background-color: transparent;
      }

      &:before {
        top: 0;
        transform: rotate(135deg);
      }

      &:after {
        top: 0;
        transform: rotate(-135deg);
      }
    `};
`;

export const LWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 1000px) {
    img {
      height: 26px;
      width: 26px;
    }
  }
`;
