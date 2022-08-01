import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 20px;
  padding: 26px 20px;
  display: flex;
  cursor: pointer;
  width: 100%;
  margin-bottom: 32px;
  transition: all 0.2s linear;

  background: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 12px;
`;

export const Title = styled.p`
  margin: 0 0 26px;
  font-weight: 500;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: 768px) {
    margin: 0;
    font-size: 14px;
  }
`;
