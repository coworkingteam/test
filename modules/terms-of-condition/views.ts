import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: unset;
  }
`;

export const InnerWrapper = styled.div`
  padding: 0 70px;
  width: 100%;
  max-width: 956px;
  margin: 150px auto;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin: 80px auto;
  }
`;

export const Title = styled.p`
  margin: 80px 0;
  font-weight: 700;

  ${({ theme }) => theme.templates.dynamicFont({ minSize: 40, maxSize: 70, maxViewport: 2000, minViewport: 320 })};
`;

export const ContentTitle = styled.p`
  margin: 20px 0;
  font-weight: 500;
  line-height: 120%;
  font-size: 24px;
`;
export const Content = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 160%;
`;

export const BlockWrapper = styled.div`
  margin-top: 60px;
`;
