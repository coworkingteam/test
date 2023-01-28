import React from 'react';
import { Wrapper } from '@md-modules/blog/components/filter-button/views';
import { FormattedMessage } from 'react-intl';

interface Props {
  titleID: string;
  isActive: boolean;
  onClick: () => void;
  color?: string;
}

const FilterButton: React.FC<Props> = ({ isActive, titleID, color, onClick }) => (
  <Wrapper color={color} onClick={onClick} isActive={isActive}>
    <FormattedMessage id={titleID} />
  </Wrapper>
);

export default FilterButton;
