import { useEffect } from 'react'
import { Toaster } from '@/src/components/ui/toaster'
import { Toaster as Sonner } from '@/src/components/ui/sonner'
import { TooltipProvider } from '@/src/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import BackToTop from './components/BackToTop'


import Overlay from './components/Overlay'
import FullScreenBackground from './pages/ComingSoon'
import './App.css'

const queryClient = new QueryClient()

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// TODO
// make global cache for other images

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
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
