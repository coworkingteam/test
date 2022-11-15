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
  display: flex;
  justify-content: center;
  padding: 76px 88px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 10px;
  }
`;

export const LinkList = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px 0 0;

  border-right: 1px solid ${({ theme }) => theme.colors.white};

  div {
    padding: 0 0 10px 0;
  }

  @media (max-width: 768px) {
    border-right: none;
    padding: 0 0 32px;

    div {
      font-size: 12px;
      text-align: center;
    }
  }
`;

export const LinkListWithoutBorder = styled(LinkList)`
  border-right: none;
`;

export const MenuItemsWrapper = styled.div`
  margin: 0 0 0 32px;
  height: 100%;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const FAQWrapper = styled.div`
  margin: 28px 0;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    margin: 28px 10px;

    ${({ theme }) => theme.templates.dynamicFont({ minSize: 8, maxSize: 12, minViewport: 320, maxViewport: 1920 })};
  }
`;

export const Heading = styled.p`
  margin: 0 0 12px 0;
  font-weight: 500;
  font-size: 26px;
  text-decoration-line: underline;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;
