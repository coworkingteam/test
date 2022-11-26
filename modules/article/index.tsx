import React from 'react';
// libs
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Link } from '@md-ui/link';
import BackButton from '@md-ui/buttons/back-button';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// constants
import { ARTICLES } from '@md-modules/article/constants';
// views
import {
  InnerWrapper,
  SubTitle,
  Wrapper,
  Image,
  HeadTitle,
  TitleWrapper,
  LinkLi,
  ContentTitle
} from '@md-modules/article/views';

const Article = () => {
  const { query } = useRouter();

  const articleData = ARTICLES.find((item) => item.queryId === query.id);

  return (
    <Wrapper>
      <ContentLoader isLoading={!articleData}>
        <InnerWrapper>
          <TitleWrapper>
            <BackButton />
            <HeadTitle highliteTitleColor={articleData?.highliteTitleColor}>
              <FormattedMessage id={articleData?.title} />
            </HeadTitle>
          </TitleWrapper>
          <Image src={articleData?.img} alt='img' />

          {/*TODO fix it*/}
          <div style={{ maxWidth: '760px' }}>
            {(articleData?.content.length || 0) > 1 && (
              <ul style={{ width: '100%', margin: '68px 0 68px 0' }}>
                {articleData?.content.map((item) => (
                  <LinkLi key={`li ${item.title}`}>
                    <Link preset='primary' href={`#${item.title}`}>
                      <FormattedMessage id={item.title} />
                    </Link>
                  </LinkLi>
                ))}
              </ul>
            )}

            {articleData?.content.map((item) => (
              <div key={item.title}>
                <ContentTitle id={item.title}>
                  <FormattedMessage id={item.title} />
                </ContentTitle>
                <SubTitle>
                  <FormattedHTMLMessage id={item.description} />
                </SubTitle>
              </div>
            ))}
          </div>
        </InnerWrapper>
      </ContentLoader>
    </Wrapper>
  );
};

export default Article;
