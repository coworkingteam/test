import styled from 'styled-components';
import { linkPresets, LinkPresets } from '@md-ui/link/presets';

export const LinkButton = styled.a<{
  preset?: LinkPresets;
  isActive?: boolean;
}>`
  cursor: pointer;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.colors.gray550)} !important;

  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'inherit')};

  ${({ preset }) => preset && linkPresets[preset]};

  &:hover {
    text-decoration: underline;
  }
`;
