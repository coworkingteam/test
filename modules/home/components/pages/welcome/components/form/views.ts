import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-height: 300px;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  padding: 46px 38px 72px 38px;

  border-radius: 15px;

  input {
    border-radius: 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 26px 38px 42px 38px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-left: 14px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 50%;
  width: max-content;
  bottom: -24px;
  transform: translatex(50%);

  button {
    height: 60px;
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 6px;
  grid-auto-flow: row dense;
  grid-template-columns: 0.4fr 1.6fr;
  align-items: center;
  margin-bottom: 14px;

  &:nth-child(3) {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    gap: 0;

    grid-template-columns: 0.5fr 1.5fr;
  }
`;

export const Label = styled.p`
  margin: 0 6px 0 0;
  text-align: left;

  font-weight: 500;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
