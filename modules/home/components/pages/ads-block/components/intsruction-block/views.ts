import styled from 'styled-components';
// libs
// @ts-ignore
import { Gradient } from 'react-gradient';

export const Wrapper = styled(Gradient)`
  width: 100%;
  position: relative;
  max-width: 1450px;
  border-radius: 30px;
  min-height: 254px;
  height: 100%;
  margin-bottom: 66px;
  text-align: center;
  padding: 20px;

  ${({ theme }) => theme.templates.boxShadow}
  ${({ theme }) => theme.templates.centerContent}
`;

export const InnerWrapper = styled.div`
  height: 100%;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent}
`;

export const Icon = styled.img`
  margin-left: 16px;
`;

export const Title = styled.p`
  margin: 30px 0 10px 0;
  font-weight: 500;
  font-size: 64px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.p`
  width: 100%;
  margin: 0;
  font-size: 18px;
  max-width: 1100px;
  opacity: 0.8;

  color: ${({ theme }) => theme.colors.white};
`;

export const EmojiBlock = styled.div`
  position: absolute;
  font-size: 50px;
  right: 20px;
  top: -30px;
`;
