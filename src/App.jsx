import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import UpdateRestaurant from "./pages/UpdateRestaurant.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const App = () => {
    return(
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/customer/dashboard" element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/restaurants/update/:id" element={
            <ProtectedRoute role="admin">
              <UpdateRestaurant />
            </ProtectedRoute>
          } />
        </Routes>
    );
};
export default App; 