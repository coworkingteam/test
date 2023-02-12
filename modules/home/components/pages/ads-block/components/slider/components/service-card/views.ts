import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px 0 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    ${({ theme }) => theme.templates.centerContent}
  }
`;

export const InitialWrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  width: 100%;
  max-width: 280px;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  position: relative;

  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.yellow300};
`;

export const Title = styled.h3`
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
  background: rgba(0, 0, 0, 0.22);
  transition: all 0.6s ease 0s;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 270px;
  padding: 10px;
  object-fit: contain;
`;
