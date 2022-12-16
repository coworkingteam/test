import React from 'react';
// components
import { Link } from '@md-ui/link';
import { NextSeo } from 'next-seo';
// types
import { BLOCKS } from '@contentful/rich-text-types';
import { Text } from '@contentful/rich-text-types/dist/types/types';
// constants
import { IArticleFields } from '@md-types/generated/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// views
import {
  Anchor,
  ContentTitle,
  ContentWrapper,
  HeadTitle,
  Image,
  InnerWrapper,
  LinkLi,
  LinkUl,
  SubTitle,
  TitleWrapper,
  Wrapper
} from '@md-modules/article/views';
// utils
// @ts-ignore
import translate from 'translit-ru-ua';

// types
interface Props {
  article: IArticleFields;
}

const Article: React.FC<Props> = ({ article }) => {
  const h3List = article.content.content.reduce(
    (previousValue, currentValue) =>
      currentValue.nodeType === BLOCKS.HEADING_3
        ? [...previousValue, ...(currentValue.content as Array<Text>)]
        : previousValue,
    [] as Array<Text>
  );

  return (
    <>
      <NextSeo
        title={`${article.title} | aksis`}
        description='This example uses more of the available config options.'
        openGraph={{
          title: article.title,
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
              url: `https:${article.image?.fields.file.url}`,
              alt: article.title
            }
          ]
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <TitleWrapper>
            <HeadTitle>{article.title}</HeadTitle>
          </TitleWrapper>
          <Image src={`https:${article.image?.fields.file.url}`} alt={article.title} />

          <ContentWrapper>
            {h3List?.length > 1 && (
              <LinkUl>
                {h3List?.map((item) => (
                  <LinkLi key={`li ${item.value}`}>
                    <Link
                      preset='primary'
                      href={translate(`#${item.value.split(' ').join('-').replace('?', '').trim()}`)}
                    >
                      {item.value}
                    </Link>
                  </LinkLi>
                ))}
              </LinkUl>
            )}

            {documentToReactComponents(article.content, {
              renderNode: {
                [BLOCKS.HEADING_3]: (node, children) => {
                  if (node.nodeType === BLOCKS.HEADING_3 && node.content[0].nodeType === 'text') {
                    return (
                      <>
                        <Anchor id={translate(node.content[0].value.split(' ').join('-').replace('?', '').trim())}>
                          &nbsp;
                        </Anchor>

                        <ContentTitle>{children}</ContentTitle>
                      </>
                    );
                  }
                },
                [BLOCKS.PARAGRAPH]: (node, children) => <SubTitle>{children}</SubTitle>
              }
            })}
          </ContentWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Article;