import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import { DashboardLayout } from './layouts/DashboardLayout';

// Pages
import { Login } from './pages/Login';
import { DashboardHome } from './pages/DashboardHome';
import { InspectionList } from './pages/InspectionList';
import { InspectionDetail } from './pages/InspectionDetail';
import { RuleManagement } from './pages/RuleManagement';
import { Reports } from './pages/Reports';
import { OfficerManagement } from './pages/OfficerManagement';
import { ManufacturerDirectory } from './pages/ManufacturerDirectory';
import { AnalyticsDashboard } from './pages/AnalyticsDashboard';

// A simple auth guard to check if a token exists in localStorage
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="inspections" element={<InspectionList />} />
          <Route path="inspections/:id" element={<InspectionDetail />} />
          <Route path="rules" element={<RuleManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="officers" element={<OfficerManagement />} />
          <Route path="manufacturers" element={<ManufacturerDirectory />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
