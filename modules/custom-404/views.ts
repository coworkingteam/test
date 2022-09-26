import styled from 'styled-components';
// @ts-ignore
import { Gradient } from 'react-gradient';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled(Gradient)`
  margin: 0;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.black600};
  ${({ theme }) => theme.templates.dynamicFont({ minSize: 160, maxSize: 560, maxViewport: 2000, minViewport: 320 })};
`;

export const SubTitle = styled.p`
  margin: 10px 0 40px 0;

  color: ${({ theme }) => theme.colors.gray550};
  ${({ theme }) => theme.templates.dynamicFont({ minSize: 14, maxSize: 24, maxViewport: 2000, minViewport: 320 })};
`;

export const InnerWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  backdrop-filter: blur(8px);
  padding: 46px;
  background: rgba(255, 255, 255, 0.6);

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 26px;
  }
`;
