import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 180px;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  width: 638px;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding: 16px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const Button = styled.button`
  width: 90px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #f2f2f2;
  border: none;
  margin-left: 8px;
  transition: background 0.2s ease-in;

  svg {
    margin-left: 4px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;