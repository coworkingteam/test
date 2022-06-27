import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  cursor: pointer;
  margin-bottom: 40px;
  transition: opacity 0.2s linear;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);

  background: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.img`
  width: 61px;
  height: 61px;
  object-fit: cover;
  margin-right: 14px;
`;

export const Title = styled.p`
  margin: 0 0 32px;
  font-weight: 500;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: 768px) {
    margin: 0;
    font-size: 14px;
  }
`;
