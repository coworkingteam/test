import styled from 'styled-components';
import { loaderPresets, LoaderPresets } from './presets';

export const Wrapper = styled.div<{ preset?: LoaderPresets }>`
  margin: auto;
  position: relative;

  ${({ preset }) => preset && loaderPresets[preset]};
`;
