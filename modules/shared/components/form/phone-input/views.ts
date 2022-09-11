import styled from 'styled-components';

export const Wrapper = styled.div<{ isError?: boolean }>`
  position: relative;

  width: 100%;

  input,
  .flag-dropdown {
    border: none !important;
  }

  .react-tel-input .form-control {
    height: 52px;
    width: 100%;
    border-radius: 15px;
    outline: none !important;
    box-shadow: none !important;

    color: ${({ theme }) => theme.colors.black600} !important;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red400 : theme.colors.gray100)} !important;

    &:focus {
      outline: none;
      color: dodgerblue;
    }

    &:focus {
      outline: none !important;
    }

    &::placeholder {
      font-weight: 500;
      margin: 0 4px;

      color: ${({ theme }) => theme.colors.black600};
    }
  }

  .special-label {
    display: none;
  }
`;
