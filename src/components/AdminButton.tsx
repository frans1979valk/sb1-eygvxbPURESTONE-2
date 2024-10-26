import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminButton() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => navigate(isAuthenticated ? '/admin/dashboard' : '/admin')}
      className="fixed bottom-4 right-4 z-50 bg-white/80 hover:bg-white/90"
    >
      <Settings className="h-4 w-4 mr-2" />
      {isAuthenticated ? 'Dashboard' : 'Admin'}
    </Button>
  );
}