import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './router/AppRoutes';
import { AppLayout } from './styles/AppLayout';
import { GlobalStyle } from './styles/GlobalStyle.js';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
