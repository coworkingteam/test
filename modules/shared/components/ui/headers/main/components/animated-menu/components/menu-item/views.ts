import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const DropdownBackground = styled(motion.div)<{ isScroll: boolean }>`
  display: flex;
  flex-wrap: wrap;
  transform-origin: 50% 0;
  border-radius: 16px;
  overflow: hidden;
  width: max-content;
  z-index: 1000;
  position: absolute;
  padding: 18px 38px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 30px 0;

  top: ${({ isScroll }) => (isScroll ? 78 : 46)}px;
  background: ${({ theme }) => theme.colors.white};

  > div {
    margin-right: 72px;
  }

  > div:last-child {
    margin-right: 0;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
