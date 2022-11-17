import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 34px;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 22px rgba(33, 33, 33, 0.06);

  &:hover {
    img {
      transform: scale(1.08) perspective(1px);
    }
  }

  background: ${({ theme }) => theme.colors.yellow600};
  ${({ theme }) => theme.templates.centerContent}
`;

export const LeftSideWrapper = styled.div`
  padding: 70px 0 70px 70px;

  @media screen and (max-width: 1200px) {
    padding: 70px;
  }

  @media (max-width: 788px) {
    padding: 20px;
  }
`;

export const ServiceName = styled.p`
  font-weight: 500;
  font-size: 50px;
  margin: 0 0 20px 0;

  color: ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SubName = styled.p`
  font-weight: 500;
  margin: 0 0 30px 0;
  font-size: 26px;

  color: ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 0 0 38px 0;

  color: ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 384px;
  object-fit: contain;
  margin: 36px 36px 36px 0;
  transition: transform 0.6s ease 0s;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Icon = styled.img`
  margin-left: 16px;
`;

export const EmojiImage = styled.img`
  position: absolute;
  //right: 18px;
  //top: -48px;

  right: 30px;
  top: -26px;

  @media (max-width: 768px) {
    right: 20px;
  }
`;
