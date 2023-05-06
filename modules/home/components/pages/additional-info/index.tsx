import React from 'react';
// components
import { FormattedMessage } from 'react-intl';
import Accordion from '@md-ui/accordions/accordion';
import WhyWeAreCard from '@md-modules/home/components/pages/additional-info/components/why-we-are-card';
// views
import {
  Wrapper,
  InnerWrapper,
  WhyWeAreCardsWrapper,
  Title
} from '@md-modules/home/components/pages/additional-info/views';
import { WHY_WE_LIST } from '@md-modules/home/components/pages/additional-info/constants';

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
        <Title>
          <FormattedMessage id='home.whyUs.title' />
        </Title>

        <WhyWeAreCardsWrapper>
          {WHY_WE_LIST.map((item, index) => (
            <WhyWeAreCard key={index} index={index + 1} descriptionID={item.description} titleID={item.title} />
          ))}
        </WhyWeAreCardsWrapper>

        <Accordion data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default AdditionalInfo;
