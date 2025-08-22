import React from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';
import { useUser } from '../context/UserContext';
import { UserCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useUser();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Account Settings
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
              <UserCircle size={40} className="text-purple-600" />
            </div>
            <div className="absolute bottom-0 right-0 h-5 w-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
              +
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-800">{user?.fullName}</h2>
            <p className="text-gray-600 text-sm">{user?.email}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          {/* Additional profile content could go here */}
        </div>
      </Card>
    </div>
  );
};

export default Profile;