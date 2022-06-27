import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  position: relative;
  min-height: 100vh;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  transform: translateZ(0px);
  overflow: hidden;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1250px) {
    overflow: visible;
    padding: 10px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0 0 27px 0;
  font-size: 52px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 158px;
  flex-direction: column;
  justify-content: center;
`;

export const FormDescription = styled.div`
  margin: 27px 0 0 0;
  font-size: 16px;
`;
