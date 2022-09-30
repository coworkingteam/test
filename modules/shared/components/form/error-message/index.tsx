import * as React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  bottom: -14px;
  font-size: 0.75rem;
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
