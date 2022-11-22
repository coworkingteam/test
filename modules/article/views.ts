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
  max-width: 1200px;
  margin: 150px auto;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 80px auto;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1<{ highliteTitleColor?: string }>`
  font-weight: 500;
  margin: 40px 0;
  font-size: 30px;
  text-align: left;
  padding: 10px;
  border-radius: 6px;

  background-color: ${({ highliteTitleColor }) => highliteTitleColor};

  @media (max-width: 1250px) {
    font-size: 42px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p<{ opacity?: number }>`
  font-size: 20px;
  margin: 0 0 20px 0;
  white-space: pre-wrap;
  line-height: 36px;

  opacity: ${({ opacity }) => opacity};
  color: ${({ theme }) => theme.colors.gray550};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  max-width: 860px;
  height: 100%;
  max-height: 400px;
  margin: 40px 0;
  object-fit: contain;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: unset;
  }
`;
