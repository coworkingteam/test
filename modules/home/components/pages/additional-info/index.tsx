import React from 'react';
// components
import Accordion from '@md-ui/accordion';
// views
import { Wrapper, InnerWrapper } from '@md-modules/home/components/pages/additional-info/views';

const AdditionalInfo = () => {
  const data = Array.from({ length: 6 }, (_, index) => ({
    id: `home.additionalInfo.${index}.title`,
    // open: index === 0,
    title: `home.additionalInfo.${index}.title`,
    content: `home.additionalInfo.${index}.content`
  }));

  return (
    <Wrapper>
      <InnerWrapper>
        <Accordion data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default AdditionalInfo;
