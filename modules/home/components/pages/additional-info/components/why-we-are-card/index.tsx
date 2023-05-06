import React from 'react';
// views
import {
  Wrapper,
  SubTitle,
  Title,
  Description
} from '@md-modules/home/components/pages/additional-info/components/why-we-are-card/views';
import { FormattedMessage } from 'react-intl';

interface Props {
  titleID: string;
  descriptionID: string;
  index: number;
}

const WhyWeAreCard: React.FC<Props> = ({ titleID, descriptionID, index }) => (
  <Wrapper>
    <Title>
      <FormattedMessage id={titleID} />
    </Title>
    <Description>
      <FormattedMessage id={descriptionID} />
    </Description>
    <SubTitle>
      <FormattedMessage id='home.whyUs.cause' /> {index}
    </SubTitle>
  </Wrapper>
);

export default WhyWeAreCard;
