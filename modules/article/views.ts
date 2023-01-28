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
  margin: 150px auto auto auto;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 768px) {
    padding: 0 20px;
    margin: 80px auto;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 760px;
`;

export const LinkLi = styled.li`
  margin-bottom: 12px;

  a {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.12px;
    line-height: 28px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const LinkUl = styled.ul`
  width: 100%;
  margin: 0 0 32px 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeadTitle = styled.h1<{ highliteTitleColor?: string }>`
  font-weight: 500;
  margin: 32px 0;
  font-size: 34px;
  padding: 10px;
  border-radius: 6px;

  background-color: ${({ highliteTitleColor }) => highliteTitleColor};

  @media (max-width: 1250px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ContentTitle = styled.h3`
  font-weight: 700;
  margin: 60px 0 20px 0;
  font-size: 34px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Anchor = styled.span`
  height: 0;
  margin-top: -150px;
  position: absolute;
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

export const ShareWrapper = styled.div`
  margin: 150px 0;
  padding: 28px;

  ${({ theme }) => theme.templates.centerContent}
  background: ${({ theme }) => theme.colors.white};
`;

export const Asset = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${({ theme }) => theme.templates.centerContent}
`;

export const ShareTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin: 0 24px 0 0;
`;

export const ShareIcon = styled.img`
  margin-right: 24px;
  max-height: 34px;
`;
