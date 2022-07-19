import * as React from 'react';
// view components
import { Footer } from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
import Welcome, { WelcomeData } from '@md-modules/shared/layouts/service/components/pages/welcome';
import ServiceRegistration from '@md-modules/shared/layouts/service/components/pages/service-registration';
import ShortDescription from '@md-modules/shared/layouts/service/components/pages/short-description';
// views
import { Wrapper } from './views';

export interface IServiceData {
  welcome: WelcomeData;
}

interface Props {
  themeColor?: string;
  data: IServiceData;
}

const ServiceLayout: React.FC<Props> = ({ themeColor, data }) => (
  <Wrapper>
    <Header />
    <Welcome data={data.welcome} themeColor={themeColor} />
    <ServiceRegistration />
    <ShortDescription themeColor={themeColor} />
    <Footer />
  </Wrapper>
);

export { ServiceLayout };
