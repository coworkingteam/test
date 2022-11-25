import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Button } from '@md-ui/buttons/main';
import AdBlock from '@md-modules/home/components/pages/services/components/ad-block';
import ServiceCard from '@md-modules/home/components/pages/services/components/servece-card';
// views
import { ServicesWrapper, SubTitle, Title, Wrapper } from '@md-modules/home/components/pages/services/views';

const BUTTON_DATA = { title: 'home.services.ads.button', url: '/spanish-resident-card' };

const Services = () => (
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
      button={BUTTON_DATA}
      serviceName='home.services.ads.title'
      img='/static/images/baggage.svg'
      emojiIcon='/static/icons/spain-emblem.svg'
      subName='home.services.ads.subName'
      description='home.services.ads.description'
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
