import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    ${({ theme }) => theme.templates.centerContent}
  }
`;

export const InitialWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  position: relative;
`;

export const Title = styled.p`
  margin: 0 0 14px 0;
  font-weight: 500;
  font-size: 20px;
  max-width: 216px;
  padding: 14px;

  color: ${({ theme }) => theme.colors.white};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.34);
`;

export const Image = styled.img`
  width: 280px;
  height: 270px;
  object-fit: cover;
`;
