import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </>
)
