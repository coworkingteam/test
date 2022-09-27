import * as React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  bottom: -16px;
  font-size: 0.75rem;
  margin-top: 2px;
  position: absolute;
  text-align: left;

  color: ${({ theme }) => theme.colors.red400};
`;

interface Props {
  errorText?: string;
}

const ErrorMessage: React.FC<Props> = ({ errorText }) => {
  if (!errorText) return null;

  return <ErrorText>{errorText}</ErrorText>;
};

export { ErrorMessage };
