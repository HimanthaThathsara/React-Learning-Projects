import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './Commpornent/navbar.jsx'
import Footer from './Commpornent/footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <App />
    <Footer />
  </>
)
