import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Patients } from "./pages/Patients";
import ProtectedRoute from "./lib/auth";
import { PatientDetails } from "./pages/PatientDetail";
import { Docotors } from "./pages/Doctor";
import RegisterDoctor from "./pages/RegisterDoctor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={Dashboard} />} />
          <Route
            path="/patients"
            element={<ProtectedRoute element={Patients} />}
          />

          <Route
            path="patients/:id"
            element={<ProtectedRoute element={PatientDetails} />}
          />
          <Route
            path="/doctors"
            element={<ProtectedRoute element={Docotors} />}
          />
          <Route
            path="/register-docotor"
            element={<ProtectedRoute element={RegisterDoctor} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
