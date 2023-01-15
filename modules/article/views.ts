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
  margin: 68px 0 68px 0;
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
  margin: 40px 0;
  font-size: 2.6rem;
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

export const ShareButtonContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 240px;
  height: 34px;
  border-radius: 80px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  width: 240px;
  height: 46px;
  border-radius: 80px;
  padding: 0 18px;
  will-change: transform;
  transition: all 0.2s ease-in-out;

  background: ${({ theme }) => theme.colors.gray170};

  &:hover {
    transform: scale(1.1);
  }

  &:hover span {
    transition-delay: 0.24s;
    transform: translateX(-280px);
  }

  &:hover div {
    opacity: 1;
    transform: scale(1);
  }

  span {
    position: absolute;
    z-index: 99;
    width: 240px;
    border-radius: 80px;
    font-size: 20px;
    text-align: center;
    line-height: 70px;
    letter-spacing: 2px;
    padding: 0 18px;
    -webkit-transition: all 1.2s ease;
    transition: all 1.2s ease;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black600};
  }
`;

export const IconWrapper = styled.div`
  opacity: 0;
  height: 32px;
  color: #1f1e1e;
  will-change: transform;
  transform: scale(0.1);
  transition: all 0.3s ease;

  button {
    height: 32px;
  }

  &:nth-child(1) {
    transition-delay: 1s;
  }

  &:nth-child(2) {
    transition-delay: 0.8s;
  }

  &:nth-child(3) {
    transition-delay: 0.6s;
  }

  &:nth-child(4) {
    transition-delay: 0.4s;
  }
`;
