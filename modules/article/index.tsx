import React from 'react';
// components
import { Link } from '@md-ui/link';
import { NextSeo } from 'next-seo';
// types
import { BLOCKS } from '@contentful/rich-text-types';
import { Text } from '@contentful/rich-text-types/dist/types/types';
// constants
import { IArticle } from '@md-types/generated/contentful';
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
  article: IArticle;
}

const Article: React.FC<Props> = ({ article }) => {
  const h3List = article.fields.content.content.reduce(
    (previousValue, currentValue) =>
      currentValue.nodeType === BLOCKS.HEADING_3
        ? [...previousValue, ...(currentValue.content as Array<Text>)]
        : previousValue,
    [] as Array<Text>
  );

  const content = React.useMemo(
    () =>
      documentToReactComponents(article.fields.content, {
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
      }),
    [article]
  );
  const openGraph = {
    title: article.fields.title,
    description: article.fields.seoDescription,
    type: 'article',
    article: {
      publishedTime: article.sys.createdAt,
      modifiedTime: article.sys.updatedAt,
      section: 'Section II',
      tags: ['Tag A', 'Tag B', 'Tag C']
    },
    images: [
      {
        width: 550,
        height: 400,
        url: `https:${article.fields.image?.fields.file.url}`,
        alt: article.fields.title
      }
    ]
  };

  return (
    <>
      <NextSeo
        openGraph={openGraph}
        description={article.fields.seoDescription}
        title={`${article.fields.seoTitle || article.fields.title} | aksis`}
      />

      <Wrapper>
        <InnerWrapper>
          <TitleWrapper>
            <HeadTitle>{article.fields.title}</HeadTitle>
          </TitleWrapper>
          <Image src={`https:${article.fields.image?.fields.file.url}`} alt={article.fields.title} />

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

            {content}
          </ContentWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Article;
