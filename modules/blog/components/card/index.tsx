import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
// import { Button } from '@md-ui/buttons/main';
// views
import { SubTitle, Title, Wrapper } from '@md-modules/blog/components/card/views';

interface Props {
  title: string;
  description?: string;
  img?: string;
  queryId: string;
}

const Card: React.FC<Props> = ({ title, img, description, queryId }) => {
  const { push } = useRouter();

  const onClick = () => push(`/blog/${queryId}`);

  return (
    <Wrapper>
      <div>
        <Title onClick={onClick}>{<FormattedMessage id={title} />}</Title>

        {description && (
          <SubTitle>
            <FormattedMessage id={description} />
          </SubTitle>
        )}
      </div>

      {/*TODO test logo*/}
      {img && (
        </* div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} */>
          {/*<Button>*/}
          {/*  Click <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />*/}
          {/*</Button>*/}

          <img width={80} style={{ objectFit: 'contain' }} src={img} alt={img} />
          {/*</div>*/}
        </>
      )}
    </Wrapper>
  );
};

export default Card;
