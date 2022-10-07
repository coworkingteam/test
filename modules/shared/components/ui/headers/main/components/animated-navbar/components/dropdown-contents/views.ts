import styled from 'styled-components';

export const Title = styled.p`
  margin: 0 0 18px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const Icon = styled.img`
  margin-left: 10px;
  width: 20px;
`;

export const Heading = styled.p<{ noMarginBottom?: boolean }>`
  margin: 0 0 14px 0;
  font-weight: 500;
  font-size: 28px;

  text-decoration-line: underline;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.black600};
`;

export const LinkList = styled.div`
  margin: 16px 0;

  div {
    padding: 4px 0;
  }
`;

export const DropdownSection = styled.div`
  padding: 22px 48px;
  position: relative;
  z-index: 1;
`;

export const DevelopersDropdownEl = styled.div`
  width: max-content;
  display: flex;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-right: 90px;
  }

  > div:last-child {
    margin-right: 0;
  }
`;
