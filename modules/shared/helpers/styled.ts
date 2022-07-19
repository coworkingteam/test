import { css } from 'styled-components';
import { Margin, Padding } from '@md-modules/shared/types/css';

export const getMarginStyle = <P extends string>(key: P) => css<{
  [k in P]?: Margin;
}>`
  margin-left: ${({ [key]: textStyle }) => textStyle?.ml}px;
  margin-top: ${({ [key]: textStyle }) => textStyle?.mt}px;
  margin-right: ${({ [key]: textStyle }) => textStyle?.mr}px;
  margin-bottom: ${({ [key]: textStyle }) => textStyle?.mb}px;
`;

export const getPaddingStyle = <P extends string>(key: P) => css<{
  [k in P]?: Padding;
}>`
  padding-left: ${({ [key]: textStyle }) => textStyle?.pl}px;
  padding-top: ${({ [key]: textStyle }) => textStyle?.pt}px;
  padding-right: ${({ [key]: textStyle }) => textStyle?.pr}px;
  padding-bottom: ${({ [key]: textStyle }) => textStyle?.pb}px;
`;
