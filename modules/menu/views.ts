import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 70px;
  margin: 150px auto;
  max-width: 1450px;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 76px auto;
  }
`;

export const Title = styled.p`
  width: 100%;
  margin: 40px 0;
  font-size: 64px;
  font-weight: 500;
  text-transform: uppercase;

  border-bottom: 2px solid ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    font-size: 50px;
    text-align: center;
  }
`;

export const ItemWrapper = styled.div`
  &:hover {
    img {
      opacity: 1;
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
  opacity: 0;
  margin-left: 10px;
  transition: all 250ms ease;
`;
