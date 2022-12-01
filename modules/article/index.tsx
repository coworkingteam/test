import React from 'react';
// libs
import { FormattedHTMLMessage, FormattedMessage, useIntl } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Link } from '@md-ui/link';
import { NextSeo } from 'next-seo';
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
  ContentTitle,
  ContentWrapper,
  LinkUl
} from '@md-modules/article/views';

const Article = () => {
  const { query } = useRouter();
  const intl = useIntl();

  const articleData = ARTICLES.find((item) => item.queryId === query.id);

  if (!articleData) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={`${intl.formatMessage({ id: articleData?.title })} | aksis`} // > 70/80 char // ukr --> Помощь с документами в Польше + для беженцов
        description='This example uses more of the available config options.'
        openGraph={{
          title: intl.formatMessage({ id: articleData?.title }),
          description: 'Description of open graph article',
          url: 'https://www.example.com/articles/article-title',
          type: 'article',
          article: {
            publishedTime: '2017-06-21T23:04:13Z',
            modifiedTime: '2018-01-21T18:04:43Z',
            expirationTime: '2022-12-21T22:04:11Z',
            section: 'Section II',
            tags: ['Tag A', 'Tag B', 'Tag C']
          },
          images: [
            {
              width: 550,
              height: 400,
              url: articleData.img,
              alt: intl.formatMessage({ id: articleData?.title })
            }
          ]
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <TitleWrapper>
            <HeadTitle highliteTitleColor={articleData?.highliteTitleColor}>
              <FormattedMessage id={articleData?.title} />
            </HeadTitle>
          </TitleWrapper>
          <Image src={articleData?.img} alt={intl.formatMessage({ id: articleData?.title })} />

          <p>test mode</p>

          <ContentWrapper>
            {(articleData?.content.length || 0) > 1 && (
              <LinkUl>
                {articleData?.content.map((item) => (
                  <LinkLi key={`li ${item.title}`}>
                    <Link preset='primary' href={`#${item.title}`}>
                      <FormattedMessage id={item.title} />
                    </Link>
                  </LinkLi>
                ))}
              </LinkUl>
            )}

            {articleData?.content.map((item) => (
              <div id={item.title} key={item.title}>
                <ContentTitle>
                  <FormattedMessage id={item.title} />
                </ContentTitle>
                <SubTitle>
                  <FormattedHTMLMessage id={item.description} />
                </SubTitle>
              </div>
            ))}
          </ContentWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Article;
