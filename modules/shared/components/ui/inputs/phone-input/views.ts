import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  input,
  .flag-dropdown {
    border: none !important;
  }

  .react-tel-input .form-control {
    border: solid 2px ${({ theme }) => theme.colors.black600} !important;
    background-color: initial;
    color: ${({ theme }) => theme.colors.black600} !important;
    height: 60px;
    width: 100%;
    border-radius: 10px 0 0 10px;
    outline: none !important;
    box-shadow: none !important;
    padding: 10px !important;

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

  .flag-dropdown {
    display: none;
  }

  .special-label {
    display: none;
  }
`;
