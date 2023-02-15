import styled from 'styled-components';

export const Wrapper = styled.div<{ cardColorOnHover: string; cardColorCode: string }>`
  width: 100%;
  padding: 32px;
  max-width: 726px;
  position: relative;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;

  background-color: ${({ theme, cardColorCode }) => cardColorCode || theme.colors.white};

  img {
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme, cardColorOnHover }) => cardColorOnHover || theme.colors.white};

    img {
      transform: scale(1.08) perspective(1px);
    }
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const PreviewImage = styled.img`
  max-width: 252px;
  max-height: 184px;
  object-fit: contain;
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    right: unset;
    bottom: unset;
    margin-bottom: 10px;
    position: relative;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-left: 14px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  margin: 0;
  transition: all 0.6s ease 0s;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin: 12px 0;
  max-width: 340px;
  white-space: pre-wrap;

  color: ${({ theme }) => theme.colors.gray540};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
