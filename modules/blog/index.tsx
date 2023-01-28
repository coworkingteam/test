import React from 'react';
// libs
import { FormattedMessage, useIntl } from 'react-intl';
// query
import { Entry } from 'contentful';
import contentfulClient from '@md-modules/shared/services/contentful';
// components
import { NextSeo } from 'next-seo';
import { Button } from '@md-ui/buttons/main';
import Card from '@md-modules/blog/components/card';
import ProgressBar from '@md-ui/progress-bar';
import FilterButton from '@md-modules/blog/components/filter-button';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// hooks
import { useRouter } from 'next/router';
import { useUIActions } from '@md-modules/shared/hooks';
// types
import { ServicesTypes } from '@md-modules/menu/constants';
import { IArticleFields } from '@md-types/generated/contentful';
// helpers
import { getPercent } from '@md-modules/shared/helpers/percentage';
import { getServiceUIKit } from '@md-modules/shared/providers/menu-provider/helpers';
// views
import {
  Title,
  Wrapper,
  CardWrapper,
  InnerWrapper,
  FiltersWrapper,
  ProgressBarTitle,
  ProgressBarWrapper,
  FilterButtonsWrapper,
  InnerProgressBarWrapper
} from '@md-modules/blog/views';

interface Props {
  data: Entry<IArticleFields>[];
  totalItems: number;
}

type Filters = 'ALL' | 'FOR_BUSINESS' | 'TRANSPORT' | 'INDIVIDUALS' | 'RESIDENCE_PERMIT';

const FILTER_ITEMS = ['ALL', 'FOR_BUSINESS', 'TRANSPORT', 'INDIVIDUALS', 'RESIDENCE_PERMIT'];

const Blog: React.FC<Props> = ({ data, totalItems }) => {
  const intl = useIntl();
  const { locale } = useRouter();
  const { openToast, startProgress, doneProgress } = useUIActions();
  const [articlesData, setArticlesData] = React.useState(data);
  const [isLoading, setIsLoading] = React.useState(false);

  const [total, setTotal] = React.useState(totalItems);
  const [activeFilter, setActiveFilter] = React.useState<Filters>('ALL');
  const [page, setPage] = React.useState(1);

  const requestMoreArticles = async () => {
    if (page >= 1) {
      startProgress();

      try {
        setIsLoading(true);

        const data = await contentfulClient.getEntries<IArticleFields>({
          content_type: 'article',
          select: 'fields.title,fields.slug,fields.image,fields.serviceType,fields.shortDescription',
          locale,
          ...(activeFilter !== 'ALL' && { 'fields.serviceType': activeFilter }),
          skip: 8 * page,
          limit: 8
        });

        setArticlesData((prevState) => [...prevState, ...data.items]);

        setPage((prevState) => prevState + 1);

        setIsLoading(false);
      } catch (error: any) {
        openToast({ type: 'ERROR', error });
      } finally {
        doneProgress();
      }
    }
  };

  const requestMoreArticlesByType = async () => {
    setIsLoading(true);

    startProgress();

    try {
      setPage(1);

      const data = await contentfulClient.getEntries<IArticleFields>({
        content_type: 'article',
        select: 'fields.title,fields.slug,fields.image,fields.serviceType,fields.shortDescription',
        locale,
        ...(activeFilter !== 'ALL' && { 'fields.serviceType': activeFilter }),
        skip: 0,
        limit: 8
      });

      setTotal(data.total);

      setArticlesData(data.items);

      setIsLoading(false);
    } catch (error: any) {
      openToast({ type: 'ERROR', error });
    } finally {
      doneProgress();
    }
  };

  React.useEffect(() => {
    requestMoreArticlesByType();
  }, [activeFilter]);

  return (
    <>
      <NextSeo
        title={intl.formatMessage({ id: 'blog.seoTitle' })}
        description={intl.formatMessage({ id: 'blog.seoDescription' })}
        openGraph={{
          title: intl.formatMessage({ id: 'blog.seoTitle' }),
          description: intl.formatMessage({ id: 'blog.seoDescription' })
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <FiltersWrapper>
            <FilterButtonsWrapper>
              {FILTER_ITEMS.map((item) => (
                <FilterButton
                  key={item}
                  titleID={`breadcrumb.${item}`}
                  isActive={activeFilter === item}
                  onClick={() => !(activeFilter === item) && setActiveFilter(item as Filters)}
                  color={getServiceUIKit(item as ServicesTypes).bgColor}
                />
              ))}
            </FilterButtonsWrapper>
          </FiltersWrapper>

          <Title>
            <FormattedMessage id='blog.title' />
          </Title>

          <ContentLoader
            isEmpty={!articlesData.length}
            emptyPlaceholderText={intl.formatMessage({ id: 'blog.emptyText' })}
            isLoading={isLoading}
          >
            <CardWrapper>
              {articlesData.map((item) => (
                <Card
                  key={item.fields.slug}
                  title={item.fields.title}
                  queryId={item.fields.slug}
                  description={item.fields.shortDescription}
                  img={`https:${item.fields.image?.fields.file.url}`}
                  cardColor={getServiceUIKit(item.fields.serviceType).bgColor}
                />
              ))}
            </CardWrapper>

            {total > 8 * page && (
              <InnerProgressBarWrapper>
                <ProgressBarWrapper>
                  <ProgressBarTitle>
                    You've viewed {8 * page} of {total} projects
                  </ProgressBarTitle>

                  <ProgressBar percent={getPercent(page * 8, total)} />

                  <Button preset='primary' onClick={requestMoreArticles}>
                    Look more
                  </Button>
                </ProgressBarWrapper>
              </InnerProgressBarWrapper>
            )}
          </ContentLoader>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Blog;
