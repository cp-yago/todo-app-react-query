import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[300]}
  }

  button {
    cursor: pointer;
  }
`