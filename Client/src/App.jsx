
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Events from './pages/Events'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/users" element={<Users />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App
