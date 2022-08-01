import styled from 'styled-components';

export const Heading = styled.h3<{ noMarginBottom?: boolean }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0;

  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? 0 : '1rem')};
  color: ${({ theme }) => theme.colors.black600};
`;

export const LinkList = styled.div<{ marginLeft?: number }>`
  margin-left: ${({ marginLeft }) => marginLeft || 0};

  div {
    padding: 4px 0;
  }
`;

export const DropdownSection = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;
`;

export const DevelopersDropdownEl = styled.div`
  width: 25rem;
`;

export const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;
