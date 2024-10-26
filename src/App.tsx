import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import Homepage from './pages/Homepage';
import GratitudeStones from './pages/GratitudeStones';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import InstallWizard from './pages/InstallWizard';
import ErrorPage from './pages/ErrorPage';
import { Toaster } from '@/components/ui/toaster';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.ADMIN} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.GRATITUDE} element={<GratitudeStones />} />
        <Route path={ROUTES.ADMIN} element={<AdminLogin />} />
        <Route path={ROUTES.INSTALL} element={<InstallWizard />} />
        <Route
          path={ROUTES.ADMIN_DASHBOARD}
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}