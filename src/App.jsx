import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </HashRouter>
  )
}

export default App