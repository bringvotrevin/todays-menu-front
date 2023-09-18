import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AsyncBoundary from 'components/common/AsyncBoundary';
import AppRoutes from 'router/AppRoutes';
import { AppLayout } from 'styles/AppLayout';
import { GlobalStyle } from 'styles/GlobalStyle.js';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  useEffect(() => {
    //debounce추가
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<>...loading</>}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AsyncBoundary>
    </QueryClientProvider>
  );
}

export default App;
