import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;

  table {
    width: 100%;
    margin-bottom: 20px;
    border-spacing: 0 20px;

    p {
      margin: 0;
    }

    @media (max-width: 768px) {
      border-spacing: 0 12px;
    }

    td {
      background-color: ${({ theme }) => theme.colors.white};
      font-size: 18px;
      padding: 14px;
      text-align: left;
      vertical-align: middle;

      &:last-child {
        border-radius: 0 8px 8px 0;
        padding: 0 14px;
        min-width: 200px;

        @media (max-width: 1150px) {
          min-width: auto;
        }
      }

      &:first-child {
        border-radius: 8px 0 0 8px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        padding: 26px;
      }
    }

    tr {
      border-radius: 10px;

      th {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        padding: 0 14px 0 14px;
        text-align: left;
        vertical-align: middle;

        color: ${({ theme }) => theme.colors.gray500};

        &:first-child {
          padding: 0 14px 0 0;
        }

        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 22px;
          padding: 10px 10px 0 10px;
        }
      }
    }
  }

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
  width: 100%;
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
  margin: 0 0 20px 0;
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

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
