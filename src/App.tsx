import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './router/AppRoutes';
import { AppLayout } from './styles/AppLayout';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <div className='App'>오늘의 메뉴 아자자! // 화이팅입니다~~!~!~!~!~!🫶</div> */}
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
