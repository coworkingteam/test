import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;

  ${({ theme }) => theme.templates.centerContent};
`;

export const InnerWrapper = styled.div`
  max-width: 1450px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 148px 70px 62px 100px;

  position: relative;
  text-align: center;
  display: flex;
  align-items: flex-end;
  transform: translateZ(0px);
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    align-items: center;
    flex-direction: column;
    padding: 80px 10px 48px 10px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const LeftSide = styled.div`
  max-width: 508px;
  text-align: left;

  @media screen and (max-width: 1250px) {
    text-align: center;
    max-width: unset;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 86px;
  margin: 0;

  @media screen and (max-width: 1250px) {
    margin: 72px 0 0 0;
    font-size: 66px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;

    ${({ theme }) => theme.templates.dynamicFont({ minSize: 30, maxSize: 66, maxViewport: 768, minViewport: 375 })};

    margin: 0;
  }
`;

export const SubTitle = styled.h2`
  margin: 74px 0 0 0;
  font-size: 24px;
  font-weight: 400;

  @media screen and (max-width: 1250px) {
    margin: 14px 0 0 0;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  max-width: 418px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const FormDescription = styled.div`
  margin: 74px 0 0 0;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    margin: 54px 0 0 0;
  }
`;

export const Icon = styled.img`
  width: 92px;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;
