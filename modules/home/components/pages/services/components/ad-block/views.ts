import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 34px;
  text-align: left;

  box-shadow: 0 0 22px rgba(33, 33, 33, 0.06);

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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Icon = styled.img`
  margin-left: 16px;
`;

export const EmojiImage = styled.img`
  position: absolute;
  right: 70px;
  top: -14px;

  @media (max-width: 768px) {
    right: 20px;
  }
`;
