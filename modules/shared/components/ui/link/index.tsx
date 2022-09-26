import * as React from 'react';
// types
import { LinkPresets } from '@md-ui/link/presets';
// components
import NextLink, { LinkProps } from 'next/link';
// views
import { LinkButton } from '@md-ui/link/views';

interface Props extends LinkProps {
  preset?: LinkPresets;
  isActive?: boolean;
}

const Link: React.FC<Props> = ({ as, href, preset = 'default', isActive, children }) => (
  <NextLink href={href} as={as} passHref>
    <LinkButton isActive={isActive} preset={preset}>
      {children}
    </LinkButton>
  </NextLink>
);

export { Link };
