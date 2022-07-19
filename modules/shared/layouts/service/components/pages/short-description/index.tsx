import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  InnerWrapper,
  SubTitle,
  Title,
  Wrapper
} from '@md-modules/shared/layouts/service/components/pages/short-description/views';

interface Props {
  themeColor?: string;
}

const ShortDescription: React.FC<Props> = ({ themeColor }) => {
  return (
    <Wrapper themeColor={themeColor}>
      <InnerWrapper>
        <Title>Открытие фирмы</Title>
        <SubTitle>Краткое описание</SubTitle>

        <div>
          <Button>Узнать больше</Button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ShortDescription;
