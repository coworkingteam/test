import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// views
import { Wrapper, Heading, LinkList } from '@md-ui/headers/main/components/animated-menu/components/sub-item/views';

interface Props {
  title: string;
}

const SubItemVariants = {
  rest: {
    x: -20,
    opacity: 0
  },
  hover: {
    x: 0,
    opacity: 1
  }
};

const SubItem: React.FC<Props> = ({ title, children }) => (
  <Wrapper className='my-2 group cursor-pointer min-w-max' layout variants={SubItemVariants}>
    <Heading>
      <FormattedMessage id={title} />
    </Heading>

    <LinkList>{children}</LinkList>
  </Wrapper>
);

export default SubItem;
