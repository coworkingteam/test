import styled from 'styled-components';

export const Wrapper = styled.div<{ whiteBG: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: all 0.2s ease;

  background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};

  &:hover {
    img {
      transform: scale(1.04) perspective(1px);
    }
  }

  &:first-child {
    margin-right: 28px;
  }

  button {
    margin: 0 56px 56px 56px;

    svg {
      width: 20px;
      margin-left: 8px;
      transition: all 0.2s ease;

      path {
        fill: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};
      }
    }

    &:hover {
      color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};
      background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};

      svg {
        path {
          fill: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    &:first-child {
      margin: 0 0 28px 0;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    ${({ theme }) => theme.templates.centerContent}

    button {
      margin: 0 10px 10px 10px;
    }
  }
`;

export const Image = styled.img`
  //height: 100%;
  //width: 100%;

  transition: all 250ms;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  margin: 56px 0 56px 0;

  ${({ theme }) => theme.templates.centerContent};
`;

export const Title = styled.p<{ whiteBG: boolean }>`
  font-weight: 500;
  font-size: 38px;
  margin: 56px 56px 0 56px;

  color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 10px 10px 0 10px;
  }
`;
