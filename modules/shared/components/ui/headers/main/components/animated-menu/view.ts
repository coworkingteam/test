import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavWrapper = styled.nav`
  padding: 28px 0 28px 28px;
`;

export const MotionUnderline = styled(motion.div)`
  position: absolute;
  background: #f1f1f1;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  height: 100%;
  top: 0;
  bottom: 0;
`;
