import styled from 'styled-components';
import { linkPresets, LinkPresets } from '@md-ui/link/presets';

export const LinkButton = styled.a<{
  preset?: LinkPresets;
  isActive: boolean;
  hoverColor?: string;
  hoverBGColor?: string;
}>`
  cursor: pointer;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.colors.black600)};

  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'inherit')};

  &:hover {
    text-decoration: underline;
  }

  ${({ preset }) => preset && linkPresets[preset]};
`;
