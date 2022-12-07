import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO fix it

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const NavbarItemTitle = styled.p<{ isScroll: boolean }>`
  margin: 0;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  color: ${({ theme }) => theme.colors.black600};
  padding: ${({ isScroll }) => (isScroll ? '30px 34px' : '14px 34px')};
`;

export const DropdownBackground = styled(motion.div)<{ isScroll: boolean; activeColor?: string }>`
  display: flex;
  flex-wrap: wrap;
  transform-origin: 50% 0;
  border-radius: 16px;
  overflow: auto;
  transition: background-color 0.4s ease 0s, top 0.4s ease 0s;

  width: 808px;
  height: 404px;

  z-index: 1000;
  position: absolute;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 30px 0;

  top: ${({ isScroll }) => (isScroll ? 78 : 46)}px;
  background-color: ${({ theme, activeColor }) => activeColor || theme.colors.gray170};
`;
