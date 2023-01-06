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
  padding: 60px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const LeftSide = styled.div`
  @media (max-width: 1000px) {
    margin-bottom: 40px;
  }
`;

export const RightSide = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const TextLogo = styled.img`
  margin-right: 40px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const SocialNetworkIcon = styled.img`
  cursor: pointer;
  margin-right: 14px;
`;

export const SocialNetworksWrapper = styled.div`
  margin-top: 18px;
`;

export const LinkList = styled.div`
  width: 100%;

  padding: 0 32px 0 0;

  div {
    padding: 0 0 10px 0;
  }

  @media (max-width: 768px) {
    border-right: none;
    padding: 0;

    div {
      font-size: 12px;
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  &:first-child {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const FAQWrapper = styled.h5`
  margin: 28px 0;
  font-size: 12px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.gray400};

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    margin: 28px 10px;

    ${({ theme }) => theme.templates.dynamicFont({ minSize: 10, maxSize: 12, minViewport: 320, maxViewport: 1920 })};
  }
`;

export const Heading = styled.p`
  margin: 0 0 12px 0;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
