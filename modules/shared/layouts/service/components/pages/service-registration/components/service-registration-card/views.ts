import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  //max-height: 560px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const RightSide = styled.div`
  border-radius: 30px 0 0 30px;
  flex: 1;
  padding: 60px;
  margin-right: 1px;

  background-color: ${({ theme }) => theme.colors.black800};

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
    border-radius: 30px 30px 0 0;
  }
`;

export const LeftSide = styled.div`
  border-radius: 0 30px 30px 0;
  flex: 2;
  padding: 60px;

  background-color: ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 0 0 30px 30px;
    flex-direction: column;

    ${({ theme }) => theme.templates.centerContent}
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 0 0 20px 0;

  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.p<{ opacity?: number }>`
  font-size: 20px;
  margin: 0 0 20px 0;
  white-space: pre-wrap;
  line-height: 36px;

  opacity: ${({ opacity }) => opacity};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoBlockWrapper = styled.div`
  margin-bottom: 64px;
`;

export const Icon = styled.img`
  margin-right: 24px;
  width: 25px;
`;
