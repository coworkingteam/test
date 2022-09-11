import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import Modal from '@md-ui/modal/main';
import { Button } from '@md-ui/buttons/main';
import Form from '@md-modules/shared/layouts/service/components/pages/welcome/components/form';
// views
import {
  Image,
  Wrapper,
  Title,
  LeftSide,
  InnerWrapper,
  StrafeButton,
  ArrowDown
} from '@md-modules/shared/layouts/service/components/pages/welcome/views';

export interface WelcomeData {
  img?: string;
  titleID: string;
  button: {
    titleID: string;
    onClick?: () => void;
  };
}

interface Props {
  themeColor?: string;
  data: WelcomeData;
}

const Welcome: React.FC<Props> = ({ themeColor, data }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => setModalIsOpen((prev) => !prev);

  return (
    <Wrapper themeColor={themeColor}>
      <InnerWrapper>
        <LeftSide>
          <Title>
            <FormattedMessage id={data?.titleID} />
          </Title>

          <Button preset='large' onClick={toggleModal}>
            <FormattedMessage id={data?.button?.titleID} />
          </Button>
        </LeftSide>

        <Image src={data?.img} />
      </InnerWrapper>

      <StrafeButton
        to='hero'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        activeClass='active'
        themeColor={themeColor}
      >
        <ArrowDown src='/static/icons/arrow-down.svg' />
      </StrafeButton>

      <Modal maxWidth={768} closeButton title={data.titleID} isOpen={modalIsOpen} toggleModal={toggleModal}>
        <Form />
      </Modal>
    </Wrapper>
  );
};

export default Welcome;
