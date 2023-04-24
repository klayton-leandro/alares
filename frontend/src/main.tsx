import "remixicon/fonts/remixicon.css";
import 'react-toastify/dist/ReactToastify.css'
import 'styles/global.css'

import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import Routes  from 'routes'

import { queryClient } from 'libs'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  </QueryClientProvider>
)
