import styled from 'styled-components';
import { Link } from '@md-ui/link';

export const Wrapper = styled.div<{ blackTheme: boolean; isActive: boolean }>`
  width: 100%;
  display: flex;
  margin: 20px 0;
  border-radius: 8px;
  transition: all 450ms;
  flex-direction: column;

  color: ${({ theme, blackTheme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};

  svg {
    width: 26px;

    path {
      transition: all 450ms;
      fill: ${({ blackTheme, theme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};
    }
  }
`;

export const ATitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ATitleWrapper = styled.div<{ blackTheme: boolean; isActive: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: padding 450ms;
  justify-content: space-between;

  padding: ${({ isActive }) => (isActive ? '12px 0 0 0' : '12px 0')};
`;

export const AContent = styled.div`
  margin: 16px 0 0 0;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const NavigationLink = styled(Link)<{ isOpen: boolean }>`
  display: inline-block;
  padding: 10px 0;
  width: max-content;
  color: #f4f4f4;
  text-decoration: none;
  transition: all 0.2s;

  ${({ theme }) => theme.templates.dynamicFont({ minSize: 12, maxSize: 20, maxViewport: 1000, minViewport: 380 })};
`;
