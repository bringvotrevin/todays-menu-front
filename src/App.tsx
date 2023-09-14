import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import AppRoutes from './router/AppRoutes';
import { AppLayout } from './styles/AppLayout';
import { GlobalStyle } from './styles/GlobalStyle.js';

function App() {
  const queryClient = new QueryClient();

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
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
