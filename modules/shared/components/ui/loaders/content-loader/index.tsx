import * as React from 'react';
// libs
import styled from 'styled-components';
// types
import { LoaderPresets } from '@md-ui/loaders/loader/presets';
// view components
import { Loader } from '../loader';

interface Props {
  isLoading: boolean;
  isEmpty?: boolean;
  loaderPreset?: LoaderPresets;
  isAbsolute?: boolean;
  emptyPlaceholderText?: string;
}

const Wrapper = styled.div<{ isAbsolute?: boolean }>`
  ${({ theme, isAbsolute }) => isAbsolute && theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
`;
const EmptyBlockWrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
`;

export const SubTitle = styled.p`
  margin: 10px 0 40px 0;

  color: ${({ theme }) => theme.colors.gray550};
  ${({ theme }) => theme.templates.dynamicFont({ minSize: 14, maxSize: 24, maxViewport: 2000, minViewport: 320 })};
`;

const ContentLoader: React.FC<Props> = ({
  children,
  loaderPreset,
  isAbsolute = true,
  emptyPlaceholderText,
  isEmpty,
  isLoading
}) => {
  if (isLoading) {
    return (
      <Wrapper isAbsolute={isAbsolute}>
        <Loader preset={loaderPreset} />
      </Wrapper>
    );
  }
  //
  // if (clientError?.error) {
  //   return <ErrorWrapper message={clientError.error} />;
  // }

  if (isEmpty) {
    return (
      <EmptyBlockWrapper>
        <SubTitle>{emptyPlaceholderText || 'There are no articles on this topic yet'}</SubTitle>
      </EmptyBlockWrapper>
    );
  }

  return <>{children}</>;
};

export { ContentLoader };
