import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1450px;
  margin: 200px auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-gap: 32px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 700px);

  @media (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fill, 340px);
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 48px;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  max-width: 310px;
  margin-top: 100px;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent}
`;

export const InnerProgressBarWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.templates.centerContent}
`;

export const ProgressBarTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0 0 8px 0;
  color: #717171;
`;

export const FiltersWrapper = styled.div`
  width: 100%;
  margin-bottom: 96px;

  ${({ theme }) => theme.templates.centerContent}
`;

export const FilterButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    margin: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
