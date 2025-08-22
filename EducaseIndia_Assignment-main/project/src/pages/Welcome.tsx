import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="space-y-4">
          <Button 
            variant="primary" 
            onClick={() => navigate('/signup')}
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Account
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/login')}
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Already Registered? Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;