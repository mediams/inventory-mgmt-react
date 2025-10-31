import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute, AdminRoute } from "./service/Guard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import SupplierPage from "./pages/SupplierPage";
import AddEditSupplierPage_ from "./pages/AddEditSupplierPage_";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ADMIN ROUTES */}
        <Route path="/categories" element={<AdminRoute element={<CategoryPage/>}/>}/>
        <Route path="/suppliers" element={<AdminRoute element={<SupplierPage/>}/>}/>
        <Route path="/add-supplier" element={<AdminRoute element={<AddEditSupplierPage_/>}/>}/>
        <Route path="/edit-supplier/:supplierId" element={<AdminRoute element={<AddEditSupplierPage_/>}/>}/>

      </Routes>
    </Router>
  );
}

export default App;
