import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;

  padding: 46px 160px;

  border-radius: 15px;

  input {
    border-radius: 15px;
    font-family: 'Arial', sans-serif !important;
  }

  @media screen and (max-width: 768px) {
    padding: 38px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-left: 14px;
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 6px;
  grid-auto-flow: row dense;
  grid-template-columns: 0.4fr 1.6fr;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    gap: 0;

    grid-template-columns: 0.5fr 1.5fr;
  }
`;

export const Label = styled.p`
  margin: 0 6px 0 0;
  text-align: left;

  font-weight: 500;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.templates.centerContent}
`;
