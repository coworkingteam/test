import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    ${({ theme }) => theme.templates.centerContent}
  }
`;

export const InitialWrapper = styled.div`
  margin: 0;
  display: flex;
  max-width: 280px;
  flex-direction: column;

  @media (max-width: 768px) {
    ${({ theme }) => theme.templates.centerContent}
  }
`;

export const Title = styled.p`
  margin: 0 0 14px 0;
  font-weight: 500;
  font-size: 20px;
  max-width: 216px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 170px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.8;

  color: ${({ theme }) => theme.colors.black600};

  @media (max-width: 768px) {
    text-align: center;
  }
`;
