import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent};
  background-color: ${({ theme }) => theme.colors.black600};
`;

export const Title = styled.p`
  font-size: 52px;
  font-weight: 500;
  margin: 60px 0 120px 0;

  color: ${({ theme }) => theme.colors.white};
`;

export const InnerWrapper = styled.div`
  display: flex;
  max-width: 1450px;
  padding: 0 70px;
  width: 100%;
  flex-direction: column;
  margin: 60px 0;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 30px 0;
  }
`;

export const WhyWeAreCardsWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin-bottom: 120px;
  align-items: center;
  grid-gap: 32px;

  justify-content: center;
  grid-template-columns: repeat(auto-fill, 360px);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 355px);
  }
`;
