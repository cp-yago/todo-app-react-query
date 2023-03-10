import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 8px;
  margin: 12px 0;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  transition: background 0.2s ease-in;

  button {
    background: none;
    border: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.light};
    margin: 0 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[400]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

interface TitleProps {
  done: boolean
}

export const Title = styled.p<TitleProps>`
  text-decoration-line: ${({ done }) => done && 'line-through'};
`;