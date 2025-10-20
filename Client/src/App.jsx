
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import Events from './pages/Events'
import CreateEvent from './pages/CreateEvent'
import Users from './pages/Users'
import Reports from './pages/Reports'
import EventDetails from './pages/EventDetails'

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
          <Route key="event-details" path="events/:id" element={<EventDetails />} />,
          <Route key="users" path="users" element={<Users />} />,
          <Route key="reports" path="reports" element={<Reports />} />
        ]}
      />
    </Routes>
  )
}

export default App
