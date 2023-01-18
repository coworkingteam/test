import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px;
  max-width: 726px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.img`
  width: 20px;
  margin-left: 14px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 500;
  margin: 0;
  cursor: pointer;
  transition: all 0.6s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray550};
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 62px 0;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 400;
  white-space: pre-wrap;
  line-height: 36px;

  color: ${({ theme }) => theme.colors.gray400};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
