import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebsiteWidget from './WebsiteWidget'
import './widget.css'

createRoot(document.getElementById('widget-root')!).render(
  <StrictMode>
    <WebsiteWidget />
  </StrictMode>,
)
