import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  //background-image: url('/static/images/gradient.svg');
  //background-position: center;
  //background-repeat: no-repeat;
  //background-size: cover;
  display: flex;

  justify-content: center;
  align-items: center;

  canvas {
    position: absolute;
  }
`;

export const InnerWrapper = styled.div`
  padding: 148px 70px 62px 100px;
  position: relative;
  max-width: 1450px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: flex-end;
  transform: translateZ(0px);
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    overflow: visible;
    padding: 80px 10px 48px 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

export const Title = styled.p`
  font-weight: 500;
  font-size: 88px;
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

export const SubTitle = styled.p`
  margin: 74px 0 0 0;
  font-size: 24px;

  @media screen and (max-width: 1250px) {
    margin: 14px 0 0 0;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
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
export const Button = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: aqua;
`;
export const StrafeButton = styled(Button)`
  bottom: -40px;
`;
