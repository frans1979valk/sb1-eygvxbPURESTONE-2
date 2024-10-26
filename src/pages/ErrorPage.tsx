import { Ban, Lock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  code: 404 | 401 | 500;
}

export default function ErrorPage({ code }: ErrorPageProps) {
  const navigate = useNavigate();
  let title = '';
  let message = '';
  let Icon = AlertTriangle;

  switch (code) {
    case 404:
      title = 'Pagina Niet Gevonden';
      message = 'De pagina die je zoekt bestaat niet of is verplaatst.';
      Icon = Ban;
      break;
    case 401:
      title = 'Geen Toegang';
      message = 'Je hebt geen toegang tot deze pagina. Log eerst in.';
      Icon = Lock;
      break;
    default:
      title = 'Er is iets misgegaan';
      message = 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.';
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <Icon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <Button onClick={() => navigate('/')} className="bg-stone-800 hover:bg-stone-700">
          Terug naar Home
        </Button>
      </div>
    </div>
  );
}