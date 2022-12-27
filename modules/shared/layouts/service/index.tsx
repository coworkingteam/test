import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { NextSeo } from 'next-seo';
import Modal from '@md-ui/modal/main';
import { MainLayout } from '@md-modules/shared/layouts/main';
import Form from '@md-modules/shared/layouts/service/components/form';
import ChildrenItem from '@md-modules/shared/layouts/service/components/tab-item';
import Welcome from '@md-modules/shared/layouts/service/components/pages/welcome';
import ShortDescription from '@md-modules/shared/layouts/service/components/pages/short-description';
import ServiceRegistration from '@md-modules/shared/layouts/service/components/pages/service-registration';
// types
import { IServiceFields } from '@md-types/generated/contentful';
// views
import { TabItemsWrapper, TabItemsContainer, InnerTabItemsWrapper } from './views';

// types
export interface PropsWithoutTabs {
  type: 'WITHOUT_TABS';
  themeColor?: string;
  data: IServiceFields;
}

export interface PropsWithTabs {
  type: 'WITH_TABS';
  themeColor?: string;
  data: { type: string; title: string; data: IServiceFields }[];
}

const ServiceLayout: React.FC<PropsWithoutTabs | PropsWithTabs> = (props) => {
  const { type, themeColor } = props;

  const { query, asPath, replace, locale, pathname } = useRouter();
  const hasTabs = type === 'WITH_TABS';
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);
  const [activeDataType, setActiveDataType] = React.useState(hasTabs ? props.data?.[0]?.type : undefined);

  const activeData = React.useMemo(
    () => (hasTabs ? props.data?.find((i) => i.type === activeDataType)?.data : props.data),
    [activeDataType, props.data]
  );
  const serviceName = `${activeData?.title}${activeData?.type ? ':' : ''} ${activeData?.type ? activeData?.type : ''}`;

  const toggleModal = () => setModalIsOpen((prev) => !prev);
  const handleChangeDataType = (type: string) => {
    setActiveDataType(type);

    void replace({ href: pathname, query: { type: type } }, asPath.split('?')[0] + `?type=${type}`, {
      scroll: false,
      shallow: true,
      locale
    });
  };

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
      if (hasTabs && props.data.some((item) => item.type === query.type)) {
        setActiveDataType(query.type as string);
      } else {
        void replace(
          { href: pathname, query: { type: activeDataType } },
          asPath.split('?')[0] + `?type=${activeDataType}`,
          {
            scroll: false,
            shallow: true,
            locale
          }
        );
      }
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
      <NextSeo
        title={activeData.seoTitle || activeData.title}
        description={activeData.seoDescription}
        openGraph={{
          title: activeData.title,
          description: activeData.seoDescription,
          images: [
            {
              width: 550,
              height: 400,
              url: `https:${activeData.serviceImage.fields.file.url}`,
              alt: activeData.serviceImage.fields.title
            }
          ]
        }}
      />

      <MainLayout>
        <div ref={wrapperRef}>
          <Welcome
            toggleModal={toggleModal}
            data={{
              titleID: activeData.title,
              img: {
                url: `https:${activeData.serviceImage.fields.file.url}`,
                alt: activeData.serviceImage.fields.title
              },
              button: { titleID: activeData.titleButtonText }
            }}
            themeColor={themeColor}
          />
        </div>

        {hasTabs && (
          <TabItemsContainer id='hero'>
            <TabItemsWrapper isScroll={isScroll}>
              <InnerTabItemsWrapper isScroll={isScroll}>
                {props.data.map((tab) => (
                  <ChildrenItem
                    key={tab.type}
                    type={tab.type}
                    title={tab.title}
                    onClick={handleChangeDataType}
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
          serviceRegistrationData={{
            rightSide: {
              title: activeData.titleCardRightSide,
              content: activeData.descriptionCardRightSide,
              button: { title: activeData.buttonTextCardRightSide }
            },
            leftSide: { content: activeData.contentCardLeftSide }
          }}
          serviceRegistrationFAQData={[
            { id: activeData.faq1Title, title: activeData.faq1Title, content: activeData.faq1Content },
            {
              id: activeData.faq2Title,
              title: activeData.faq2Title,
              content: activeData.faq2Content
            },
            {
              id: activeData.faq3Title,
              title: activeData.faq3Title,
              content: activeData.faq3Content
            },
            {
              id: activeData.faq4Title,
              title: activeData.faq4Title,
              content: activeData.faq4Content
            }
          ]}
        />

        <ShortDescription themeColor={themeColor} />
      </MainLayout>

      <Modal closeButton maxWidth={824} isOpen={modalIsOpen} toggleModal={toggleModal} title={activeData.title}>
        <Form toggleModal={toggleModal} service={serviceName} />
      </Modal>
    </>
  );
};

export { ServiceLayout };
