import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import { ProtectedRoute } from "./utils/validation"
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App