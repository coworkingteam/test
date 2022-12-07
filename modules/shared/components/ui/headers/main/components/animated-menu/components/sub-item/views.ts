import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO fix it

export const Wrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const Heading = styled.p<{ noMarginBottom?: boolean }>`
  margin: 0;
  font-weight: 500;
  font-size: 18px; // 22 - 20%
  cursor: pointer;
  padding: 16px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.black600};
`;

export const LinkList = styled.div`
  //margin: 12px 0;
  //
  //div {
  //  padding: 4px 0;
  //}
`;
