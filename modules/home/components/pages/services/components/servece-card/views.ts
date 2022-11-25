import styled from 'styled-components';

export const Wrapper = styled.div<{ whiteBG: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};

  button {
    margin: 0 56px 56px 56px;

    svg {
      width: 20px;
      margin-left: 8px;

      path {
        transition: all 0.2s ease;
        fill: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};
      }
    }
  }

  &:hover {
    img {
      transform: scale(1.08) perspective(1px);
    }

    button {
      color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};
      background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};

      svg {
        path {
          fill: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.black600)};
        }
      }
    }
  }

  &:first-child {
    margin-right: 28px;
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
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.6s ease 0s;
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
  text-transform: uppercase;
  margin: 56px 56px 0 56px;

  color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 10px 10px 0 10px;
  }
`;
