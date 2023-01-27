import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 736px;
  margin-bottom: 16px;;
`;

export const Title = styled.small`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Counter = styled.span`
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 12px;
  font-weight: 700;
  color: #D9D9D9;
  padding: 2px 8px;
  margin-left: 8px;
`;