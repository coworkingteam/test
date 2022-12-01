import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)``;

export const Heading = styled.p<{ noMarginBottom?: boolean }>`
  margin: 0 0 12px 0;
  font-weight: 500;
  font-size: 22px;

  text-decoration-line: underline;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.black600};
`;

export const LinkList = styled.div`
  margin: 12px 0;

  div {
    padding: 4px 0;
  }
`;
