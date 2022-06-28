import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  width: 100%;
  padding: 0 70px;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent}
  background-color: ${({ theme }) => theme.colors.black800};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const IWrapper = styled.div`
  max-width: 1450px;
  width: 100%;
  padding: 76px 88px;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  gap: 36px 96px;
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
  max-width: 1450px;
  font-size: 16px;
  width: 100%;
  padding: 20px 88px;
  opacity: 0.7;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 20px 10px;
    font-size: 14px;
    text-align: center;
  }
`;
