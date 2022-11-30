import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CookiesProvider } from 'react-cookie';

import Home from './pages/Home'
import Actor from './pages/Actor'

const queryClient = new QueryClient()

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="actors">
              <Route path="category/:categoryName" element={<Home />} />
              <Route path="id/:actorId" element={<Actor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CookiesProvider>

  );
}

export default App;
