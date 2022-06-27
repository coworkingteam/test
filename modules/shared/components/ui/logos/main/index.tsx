import * as React from 'react';
// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/' passHref>
    <a>
      <img src='/static/icons/logo.svg' alt='sw-logo' />
    </a>
  </Link>
);

export { Logo };
