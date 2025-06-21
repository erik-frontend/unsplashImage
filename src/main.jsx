import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProvider } from './components/context.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  </AppProvider>
)
