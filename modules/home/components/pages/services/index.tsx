import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Button } from '@md-ui/buttons/main';
import AdBlock from '@md-modules/home/components/pages/services/components/ad-block';
import ServiceCard from '@md-modules/home/components/pages/services/components/servece-card';
// constants
import { IAdsBlock } from '@md-types/generated/contentful';
// views
import { ServicesWrapper, SubTitle, Title, Wrapper } from '@md-modules/home/components/pages/services/views';

// types
interface Props {
  data: IAdsBlock;
}

const Services: React.FC<Props> = ({ data }) => (
  <Wrapper>
    <Title>
      <FormattedMessage id='home.services.title' />
    </Title>
    <SubTitle>
      <FormattedMessage id='home.services.subTitle' />
    </SubTitle>

    <ServicesWrapper>
      <ServiceCard
        src='/menu?type=INDIVIDUALS'
        whiteBG
        title='home.services.serviceCards.individuals'
        img='/static/images/stamp.svg'
      />
      <ServiceCard
        src='/menu?type=FOR_BUSINESS'
        title='home.services.serviceCards.forBusiness'
        img='/static/images/basket(dark).png'
      />
    </ServicesWrapper>

    <AdBlock
      button={{ url: data.fields.slug, title: data.fields.actionButtonText }}
      serviceName={data.fields.title}
      img={`https:${data.fields.image.fields.file.url}`}
      emojiIcon={`https:${data.fields.icon?.fields.file.url}`}
      subName={data.fields.subTitle}
      description={data.fields.content}
    />

    <ServicesWrapper>
      <ServiceCard
        src='/menu?type=TRANSPORT'
        whiteBG
        title='home.services.serviceCards.transport'
        img='/static/images/car-front.png'
      />
      <ServiceCard
        src='/menu?type=RESIDENCE_PERMIT'
        whiteBG
        title='home.services.serviceCards.residencePermitsDocuments'
        img='/static/images/documents.png'
      />
    </ServicesWrapper>

    <Title>
      <FormattedMessage id='home.services.additionalInfo.title' />
    </Title>
    <Button preset='large'>
      <FormattedMessage id='home.services.additionalInfo.buttonTitle' />
    </Button>
  </Wrapper>
);

export default Services;
