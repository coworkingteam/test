import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  width: 100%;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent}
  background-color: ${({ theme }) => theme.colors.black800};
`;

export const ContentWrapper = styled.div`
  max-width: 1450px;
  width: 100%;
  padding: 0 70px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: grid;
  gap: 36px 96px;
  padding: 76px 88px;
  grid-template-columns: repeat(auto-fill, 200px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  div {
    padding: 0;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 76px 0;

    div {
      font-size: 16px;
      text-align: center;
    }
  }
`;

export const FAQWrapper = styled.div`
  font-size: 16px !important;
  opacity: 0.7;
  padding: 20px 110px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 20px 10px;
    font-size: 14px;
    text-align: center;
  }
`;
