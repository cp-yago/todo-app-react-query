import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/themes/default'
import GlobalStyles from './assets/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div className="App">
        <h1 style={{ fontFamily: 'Inter' }}>Hello React!</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
