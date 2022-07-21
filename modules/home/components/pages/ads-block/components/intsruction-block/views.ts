import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 208px;
  max-width: 1450px;
  border-radius: 30px;
  min-height: 254px;
  margin-bottom: 66px;

  background: ${({ theme }) => theme.colors.white};

  img {
    //width: 100%;
    //object-fit: cover;
  }
`;
