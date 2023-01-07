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
  adData: IAdsBlock;
}

const Services: React.FC<Props> = ({ adData }) => (
  <Wrapper>
    <Title>
      <FormattedMessage id='home.services.title' />
    </Title>
    <SubTitle>
      <FormattedMessage id='home.services.subTitle' />
    </SubTitle>

    <ServicesWrapper>
      <ServiceCard
        src='/menu/INDIVIDUALS'
        whiteBG
        title='home.services.serviceCards.individuals'
        img='/static/images/stamp.svg'
      />
      <ServiceCard
        src='/menu/FOR_BUSINESS'
        title='home.services.serviceCards.forBusiness'
        img='/static/images/basket(dark).png'
      />
    </ServicesWrapper>

    <AdBlock
      button={{ url: adData.fields.slug, title: adData.fields.actionButtonText }}
      serviceName={adData.fields.title}
      img={`https:${adData.fields.image.fields.file.url}`}
      emojiIcon={`https:${adData.fields.icon?.fields.file.url}`}
      subName={adData.fields.subTitle}
      description={adData.fields.content}
    />

    <ServicesWrapper>
      <ServiceCard
        src='/menu/TRANSPORT'
        whiteBG
        title='home.services.serviceCards.transport'
        img='/static/images/car-front.png'
      />
      <ServiceCard
        src='/menu/RESIDENCE_PERMIT'
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
