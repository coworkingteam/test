import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import BackButton from '@md-ui/buttons/back-button';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// constants
import { ARTICLES } from '@md-modules/article/constants';
// views
import { InnerWrapper, SubTitle, Wrapper, Image, Title, TitleWrapper } from '@md-modules/article/views';

const Article = () => {
  const { query } = useRouter();

  const articleData = ARTICLES.find((item) => item.queryId === query.id);

  return (
    <Wrapper>
      <ContentLoader isLoading={!articleData}>
        <InnerWrapper>
          <TitleWrapper>
            <BackButton />
            <Title highliteTitleColor={articleData?.highliteTitleColor}>
              <FormattedMessage id={articleData?.title} />
            </Title>
          </TitleWrapper>
          <Image src={articleData?.img} alt='img' />

          <SubTitle>
            <FormattedMessage id={articleData?.desc} />
          </SubTitle>
        </InnerWrapper>
      </ContentLoader>
    </Wrapper>
  );
};

export default Article;
