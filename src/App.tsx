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

import './App.css'

import Overlay from './components/Overlay'
// import FullScreenBackground from './pages/ComingSoon'
import { useEffect } from 'react'
import Patents from './pages/Patents'
import Reviews from './pages/Reviews'
import ReviewDetailed from './components/modules/reviews/ReviewDetailed'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { ScrollToTop } from './lib/sessions'
import { RootStyler } from './lib/utils'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <RootStyler />
      <ScrollToTop />
        <AnimatePresence mode='wait'>
          <>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/patents-research' element={<Patents />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/reviews/:path' element={<ReviewDetailed />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <BackToTop />
            <Overlay />
          </>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App

//TODO
// cache images, reviews, patents, open graph.