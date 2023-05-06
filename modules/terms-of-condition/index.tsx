import React from 'react';
// views
import {
  Wrapper,
  InnerWrapper,
  Title,
  ContentTitle,
  Content,
  BlockWrapper
} from '@md-modules/terms-of-condition/views';
import { Link } from '@md-ui/link';

const TermsOfCondition = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Terms Of Condition</Title>

        <BlockWrapper>
          <ContentTitle>§ 1.</ContentTitle>
          <ContentTitle>[General Statements]</ContentTitle>

          <Content>
            The Terms of Use (“Terms and Conditions” or “Terms Of Service” or "Terms of Use" or "Agreement") regulates
            your usage and obligations related to AKSIS AGENCY (“AKSIS AGENCY Website(s)” or “Websites” or “Site”,) and
            the Services and Products offered by the Company, including online and offline immigration services
            (“Offered Products”) These Terms of Use are an Agreement between you (“Customer” or “you” or “user”) and the
            Company that are legally binding and enforceable. If any limitation under any applicable law limits or
            prevents your ability to be bound by the Terms of Use or any part thereof, you may not visit or use the
            AKSIS AGENCY Websites or Offered Products. When you visit or use the AKSIS AGENCY Websites or Offered
            Products you explicitly state that you are in full compliance of any applicable law, including without
            limitation, any applicable law regarding limitation applied on your ability to enter into agreements or
            using or visiting the AKSIS AGENCY Websites or Offered Products because of your age or any other limitation
            that applies. When you visit the AKSIS AGENCY Websites or use any of the services provided therein including
            the Offered Products, you declare that you read, agreed with and accepted all of the terms and conditions
            contained in the Terms of Use, which includes those terms and conditions explicitly delineated below and
            those incorporated by reference. By visiting or using any of the AKSIS AGENCY websites or offered products,
            you hereby acknowledge that the canada immigration express brand and website, including the offered
            products, are owned by the private company and is not and does not pretend to be, an official organ of the
            Canadian or Spain government or otherwise connected to the Canadian or Spain government in any way
            whatsoever. Please note that at any time, and upon the approval of the government or legislative bodies, the
            Government of Canada or Spain has the authority to modify or cancel the different immigration Visa Programs
            presented in the AKSIS AGENCY Website.
          </Content>
        </BlockWrapper>

        <BlockWrapper>
          <ContentTitle>§ 2.</ContentTitle>
          <ContentTitle>[Our Services and Products]</ContentTitle>

          <Content>
            The goal of AKSIS AGENCY is to assist with your immigration to Canada or Spain and the application procedure
            by (1) providing you with a professional assessment of your visa options ("Assessment"), support with visa
            application procedure such as gathering and reviewing supporting documents, correctly completing forms,
            proper submission of applications, etc., and additional services that are not directly related to your
            application or the immigration procedure, but may be helpful with your procedure. It is stated explicitly
            here that the Company is a marketing firm and as such is the owner of the Website and responsible for the
            performance of the Website. In order to receive any document needed for immigration to Canada or Spain you
            will be required to personally engage with an Authorized Representative or you may choose to apply on your
            own. You hereby declare that you understand that using our services or choosing the Offered Products or
            Services does not guarantee a better or expedited handling of your application for immigration. The Offered
            Products and/or Software may be used only for its intended purpose, and may not be used to prepare
            immigration forms, supporting documents or letters on a professional basis.
          </Content>
        </BlockWrapper>

        <BlockWrapper>
          <ContentTitle>§ 3.</ContentTitle>
          <ContentTitle>[Fees, Paid Products and Refunds]</ContentTitle>

          <Content>
            In consideration for the Service, you will be required to pay the Company certain fees. All prices for
            services posted on the Website are NET prices. Payment of all fees and charges to the Company, if
            applicable, must be made by a valid credit or charge card or other forms designated on the Website, such as
            ApplePay, GooglePay, BLIK. You hereby declare that the source of funds used by you to use the Offered
            Products and/or used through the Website is not illegal. If any problem regarding any subject occurs,
            including financial matter, please do not hesitate to contact our Customer Service Department at{' '}
            <Link preset='medium' href='mailto:support@aksis.agency'>
              support@aksis.agency
            </Link>{' '}
            In case of solving the problem unilaterally by the customer through cancellation of transaction by the bank
            or credit card company, we reserve the right to contact the bank and submit a re-presentment letter in order
            to claim for the funds back. The Company reserves the right to use third party electronic payment processors
            and/or financial institutions to process payments made by you in connection with your use of the Offered
            Products.
          </Content>
        </BlockWrapper>

        <BlockWrapper>
          <ContentTitle>§ 4.</ContentTitle>
          <ContentTitle>[Complaints]</ContentTitle>

          <Content>
            If the Customer considers that the AKSIS AGENCY does not provide services in accordance with the obligations
            assumed, he may file a complaint. In such a situation, the Customer is asked to inform the AKSIS AGENCY
            about the shortcomings so as to enable the AKSIS AGENCY to respond to them. A complaint should be via e-mail
            to the following address:{' '}
            <Link preset='medium' href='mailto:support@aksis.agency'>
              support@aksis.agency
            </Link>{' '}
            A complaint should include: name and surname, e-mail address, description of the objections raised, as well
            as your demands. The Company will respond to such a complaint within 14 days (not applicable to complaints
            submitted by a User who is not a consumer). The response to the complaint is sent only to the e-mail
            address, unless the User wishes to receive a reply by post. No response from the Company within 14 days
            results in the complaint being considered justified (not applicable to complaints submitted by a User who is
            not a consumer). The Company indicates that he is the entity competent to consider complaints regarding only
            the booking and issuing of an air ticket made via the Website - complaints regarding the performance of the
            flight contract are considered by airlines.
          </Content>
        </BlockWrapper>

        <BlockWrapper>
          <ContentTitle>§ 5.</ContentTitle>
          <ContentTitle>[Copyright Protection]</ContentTitle>

          <Content>
            All photos and other materials (including texts, graphics, logos) posted on the Website belong to the
            Company or have been used with the consent of third parties who have copyrights to them. It is forbidden to
            copy photos and other graphic materials and to reprint texts posted on the Website, including making them
            available on the Internet without the written consent of the Company or another third-party holding
            copyrights to them. It is also forbidden for external entities to download photos from the Website and to
            use them for marketing and commercial purposes.
          </Content>
        </BlockWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TermsOfCondition;
