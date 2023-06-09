import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 70px;
  margin: 200px auto;
  max-width: 1450px;

  @media (max-width: 1000px) {
    padding: 0 10px;
    margin: 150px auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const EmptyBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EmptyText = styled.p`
  margin: 0 0 50px 0;
  font-size: 24px;

  color: ${({ theme }) => theme.colors.gray550};
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 38px;
  margin: 0 0 20px 0;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const Icon = styled.img`
  width: 32px;
  margin-left: 10px;
  transition: all 250ms ease;
`;

export const PreviewIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const RightSide = styled.div<{ colorBG: string }>`
  width: 100%;
  border-radius: 20px;
  padding: 88px 0;
  max-width: 700px;
  height: 576px;

  background: ${({ colorBG }) => colorBG};
  ${({ theme }) => theme.templates.centerContent};
  ${({ theme }) => theme.templates.centerContent};

  @media (max-width: 1000px) {
    margin-bottom: 32px;
    height: 100%;
    width: unset;
    padding: 30px;
    max-height: 576px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  max-height: 576px;
  margin-right: 60px;
  overflow-y: auto;

  a {
    font-size: 26px;
  }

  @media (max-width: 1000px) {
    overflow: unset;
    max-height: unset;
    margin: 0;

    a {
      font-size: 20px;
    }
  }
`;
