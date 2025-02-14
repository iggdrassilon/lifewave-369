import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/fonts.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('@/src/workers/serviceWorker.js')
  .then((registration) => {
    console.log('Service worker registered:', registration);
  })
  .catch((registrationError) => {
    console.error('Service worker registration failed:', registrationError);
  });
}

createRoot(document.getElementById('root')!).render(<App />)
