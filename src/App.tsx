import { Toaster } from '@/src/components/ui/toaster'
import { Toaster as Sonner } from '@/src/components/ui/sonner'
import { TooltipProvider } from '@/src/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Patents from './pages/Patents'
import Reviews from './pages/Reviews'
import Research from './pages/Research'
import NotFound from './pages/NotFound'
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import BackToTop from './components/BackToTop'
import LoadingOverlay from './components/layouts/loadingOverlay'

import './App.css'

import Story from './pages/Story'
import Overlay from './components/Overlay'
import OverlayModal from './components/modules/overlays/OverlayModals'
import FullScreenBackground from './pages/ComingSoon'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode='wait'>
          {/* <LoadingOverlay /> */}
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/patents-research' element={<FullScreenBackground props={'PATENTS-RESEARCH'} />} />
            <Route path='/reviews' element={<FullScreenBackground props={'REVIEWS'} />} />
            <Route path='/story' element={<FullScreenBackground props={'STORY'} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTop />
          <Overlay />
          {/* <OverlayModal /> */}
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
