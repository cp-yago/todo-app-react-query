import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/themes/default'
import GlobalStyles from './assets/styles/global'
import { ToDo } from './pages/ToDo'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToDo />
    </ThemeProvider>
  )
}

export default App
