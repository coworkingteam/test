import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Button } from '@md-ui/buttons/main';
// views
import { SubTitle, Title, Wrapper, Icon, PreviewImage, FooterWrapper } from '@md-modules/blog/components/card/views';

interface Props {
  title: string;
  description?: string;
  img?: string;
  queryId: string;
  cardColorCode: string;
  cardColorOnHover: string;
}

const Card: React.FC<Props> = ({ title, img, description, cardColorCode, cardColorOnHover, queryId }) => {
  const { push } = useRouter();

  const onClick = () => push(`/blog/${queryId}`);

  return (
    <Wrapper cardColorCode={cardColorCode} cardColorOnHover={cardColorOnHover}>
      <div>
        <Title>{<FormattedMessage id={title} />}</Title>

        {description && <SubTitle>{description}</SubTitle>}
      </div>

      {img && (
        <FooterWrapper>
          <Button onClick={onClick}>
            <FormattedMessage id='blog.readButton' /> <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
          </Button>

          <PreviewImage src={img} alt={img} />
        </FooterWrapper>
      )}
    </Wrapper>
  );
};

export default Card;
