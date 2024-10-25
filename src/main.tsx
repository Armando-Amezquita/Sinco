import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigator } from './presentation/navigator/Navigator'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigator />
  </StrictMode>,
)
