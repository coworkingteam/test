import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  margin: 60px 0;
`;

export const InitialWrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  flex-direction: column;
  transition: all 0.2s ease;

  width: 100%;
  height: 100%;
  padding: 24px;
  max-width: 368px;
  max-height: 368px;
  border-radius: 15px;

  background-color: rgba(147, 203, 255, 0.3);

  &:hover {
    transform: scale(1.08) perspective(1px);
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const NameWrapper = styled.div`
  display: flex;
  margin-left: 12px;
  flex-direction: column;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 158.5%;
  height: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;

  object-fit: cover;
`;
