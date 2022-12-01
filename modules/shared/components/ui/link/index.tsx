import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { LinkPresets } from '@md-ui/link/presets';
// components
import NextLink, { LinkProps } from 'next/link';
// views
import { LinkButton } from '@md-ui/link/views';

interface Props extends LinkProps {
  preset?: LinkPresets;
  hoverColor?: string;
  hoverBGColor?: string;
}

const Link: React.FC<Props> = ({ as, hoverColor, hoverBGColor, href, preset = 'default', children }) => {
  const { asPath, locale } = useRouter();

  const isActive = typeof href === 'string' && asPath.includes(href);

  return (
    <NextLink locale={locale} href={href} as={as} passHref>
      <LinkButton hoverColor={hoverColor} hoverBGColor={hoverBGColor} isActive={isActive} preset={preset}>
        {children}
      </LinkButton>
    </NextLink>
  );
};

export { Link };
