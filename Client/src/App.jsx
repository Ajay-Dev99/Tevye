
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import Events from './pages/Events'
import CreateEvent from './pages/CreateEvent'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
        children={[
          <Route key="dashboard" index element={<DashBoard />} />,
          <Route key="events" path="events" element={<Events />} />,
          <Route key="create-event" path="events/create" element={<CreateEvent />} />,
          <Route key="users" path="users" element={<Users />} />,
          <Route key="reports" path="reports" element={<Reports />} />,
          <Route key="settings" path="settings" element={<Settings />} />
        ]}
      />
    </Routes>
  )
}

export default App
