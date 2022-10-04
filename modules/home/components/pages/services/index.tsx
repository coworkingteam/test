import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import ServiceCard from '@md-modules/home/components/pages/services/components/servece-card';
import AdBlock from '@md-modules/home/components/pages/services/components/ad-block';
// views
import { ServicesWrapper, SubTitle, Title, Wrapper } from '@md-modules/home/components/pages/services/views';

const BUTTON_DATA = { title: 'Узнать больше', url: '/spanish-resident-card' };

const Services = () => (
  <Wrapper>
    <Title>Легализуем пребывание и работу в стране</Title>
    <SubTitle>Закрываем потребности как физических лиц, так и работодателей</SubTitle>

    <ServicesWrapper>
      <ServiceCard whiteBG title='ФИЗ ЛИЦАМ' img='/static/images/stamp3 1.svg' />
      <ServiceCard title='БИЗНЕСУ' img='/static/images/basket(dark).png' />
    </ServicesWrapper>

    <AdBlock
      button={BUTTON_DATA}
      serviceName='карта TIE'
      emojiIcon='/static/icons/plane.svg'
      img='/static/images/spain 2.svg'
      subName='Вид на жительство в Испании'
      description='Вылеты в Барселону и Мадрид с гидом, питанием, проживанием, и полным сопровождением - от заполнения анкеты до открытия банковского счёта. Карта в руки уже за 6 недель, без нерешаемых вопросов и невыполнимых задач!'
    />

    <ServicesWrapper>
      <ServiceCard whiteBG title='Транспорт' img='/static/images/car-front.svg' />
      <ServiceCard whiteBG title='Документы гражданства внж' img='/static/images/documents.png' />
    </ServicesWrapper>

    <Title>Не можете найти нужную вам услугу, или остались дополнительные вопросы? </Title>
    <Button>Связатся с нами</Button>
  </Wrapper>
);

export default Services;
