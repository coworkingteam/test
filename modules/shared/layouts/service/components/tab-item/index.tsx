import React from 'react';
// libs
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

interface Props {
  type: string;
  titleID: string;
  isActive?: boolean;
  onClick: (type: string) => void;
}

export const Item = styled.p<{ isActive?: boolean }>`
  cursor: pointer;
  font-weight: 500;
  margin: 0 16px 0 0;
  font-size: 28px;
  text-transform: capitalize;

  text-decoration-line: ${({ isActive }) => isActive && 'underline'};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.black600 : theme.colors.gray560)};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const ChildrenItem: React.FC<Props> = ({ type, isActive = false, titleID, onClick }) => (
  <Item onClick={() => onClick(type)} isActive={isActive}>
    <FormattedMessage id={titleID} />
  </Item>
);

export default ChildrenItem;
