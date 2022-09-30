import * as React from 'react';
// libs
import ScrollToTop from 'react-scroll-to-top';
// hooks
import { useRouter } from 'next/router';
// view components
import { Footer } from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
import ChildrenItem from '@md-modules/shared/layouts/service/components/tab-item';
import Welcome, { WelcomeData } from '@md-modules/shared/layouts/service/components/pages/welcome';
import ServiceRegistration from '@md-modules/shared/layouts/service/components/pages/service-registration';
import ShortDescription from '@md-modules/shared/layouts/service/components/pages/short-description';
// types
import { IAccordionItem } from '@md-modules/shared/types/accordion';
import { ServiceRegistrationData } from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card';
// views
import { TabItemsWrapper, TabItemsContainer, InnerTabItemsWrapper, Wrapper } from './views';
import Modal from '@md-ui/modal/main';
import Form from '@md-modules/shared/layouts/service/components/form';
import { useIntl } from 'react-intl';

// types
export interface IServiceData {
  welcome: WelcomeData;
  serviceRegistrationFAQData: IAccordionItem[];
  serviceRegistrationData: ServiceRegistrationData;
}

interface PropsWithoutTabs {
  type: 'WITHOUT_TABS';
  themeColor?: string;
  data: IServiceData;
}

interface PropsWithTabs {
  type: 'WITH_TABS';
  themeColor?: string;
  data: { type: string; titleID: string; data: IServiceData }[];
}

// constants
const SCROLL_TO_TOP_BUTTON_STYLES = { borderRadius: '100%' };

const ServiceLayout: React.FC<PropsWithoutTabs | PropsWithTabs> = (props) => {
  const { type, themeColor } = props;
  const intl = useIntl();
  const hasTabs = type === 'WITH_TABS';
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { query } = useRouter();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);
  const [activeDataType, setActiveDataType] = React.useState(hasTabs ? props.data?.[0]?.type : undefined);

  const activeData = React.useMemo(
    () => (hasTabs ? props.data?.find((i) => i.type === activeDataType)?.data : props.data),
    [activeDataType, props.data]
  );

  const serviceName = `${intl.formatMessage({ id: activeData?.welcome.titleID })}${
    activeData?.welcome.tabTitleID ? ':' : ''
  } ${activeData?.welcome.tabTitleID ? intl.formatMessage({ id: activeData.welcome.tabTitleID }) : ''}`;

  const toggleModal = () => setModalIsOpen((prev) => !prev);

  const scrollHandler = () => {
    const scrollHeight = wrapperRef.current?.scrollHeight || 0;

    if (window.scrollY > scrollHeight - 46) {
      setIsScroll(true);
      return;
    }

    setIsScroll(false);
  };

  React.useEffect(() => {
    if (query.type) {
      setActiveDataType(query.type as string);
    }

    scrollHandler();

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  if (!activeData) {
    return null;
  }

  return (
    <Wrapper>
      <Header />
      <div ref={wrapperRef}>
        <Welcome toggleModal={toggleModal} data={activeData.welcome} themeColor={themeColor} />
      </div>

      {hasTabs && (
        <TabItemsContainer id='hero'>
          <TabItemsWrapper isScroll={isScroll}>
            <InnerTabItemsWrapper isScroll={isScroll}>
              {props.data.map((tab) => (
                <ChildrenItem
                  key={tab.type}
                  type={tab.type}
                  titleID={tab.titleID}
                  onClick={setActiveDataType}
                  isActive={activeDataType === tab.type}
                />
              ))}
            </InnerTabItemsWrapper>
          </TabItemsWrapper>
        </TabItemsContainer>
      )}

      <ServiceRegistration
        hasTabs={hasTabs}
        toggleModal={toggleModal}
        serviceRegistrationData={activeData.serviceRegistrationData}
        serviceRegistrationFAQData={activeData.serviceRegistrationFAQData}
      />

      {/*<ShortDescription themeColor={themeColor} />*/}
      <Footer />

      <ScrollToTop smooth top={100} style={SCROLL_TO_TOP_BUTTON_STYLES} />

      <Modal
        maxWidth={768}
        closeButton
        title={activeData.welcome.titleID}
        isOpen={modalIsOpen}
        toggleModal={toggleModal}
      >
        <Form toggleModal={toggleModal} service={serviceName} />
      </Modal>
    </Wrapper>
  );
};

export { ServiceLayout };
