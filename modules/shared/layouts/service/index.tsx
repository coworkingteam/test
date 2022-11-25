import * as React from 'react';
// hooks
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
// view components
import Modal from '@md-ui/modal/main';
import { MainLayout } from '@md-modules/shared/layouts/main';
import Form from '@md-modules/shared/layouts/service/components/form';
import ChildrenItem from '@md-modules/shared/layouts/service/components/tab-item';
import Welcome, { WelcomeData } from '@md-modules/shared/layouts/service/components/pages/welcome';
import ShortDescription from '@md-modules/shared/layouts/service/components/pages/short-description';
import ServiceRegistration from '@md-modules/shared/layouts/service/components/pages/service-registration';
// types
import { IAccordionItem } from '@md-modules/shared/types/accordion';
import { ServiceRegistrationData } from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card';
// views
import { TabItemsWrapper, TabItemsContainer, InnerTabItemsWrapper } from './views';

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
    <>
      <MainLayout>
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

        <ShortDescription themeColor={themeColor} />
      </MainLayout>

      <Modal maxWidth={824} isOpen={modalIsOpen} toggleModal={toggleModal} title={activeData.welcome.titleID}>
        <Form toggleModal={toggleModal} service={serviceName} />
      </Modal>
    </>
  );
};

export { ServiceLayout };
