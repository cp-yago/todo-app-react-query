import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/themes/default'
import GlobalStyles from './assets/styles/global'
import { ToDo } from './pages/ToDo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ToDo />
      </QueryClientProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
