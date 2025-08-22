import { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  isAgency: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: User, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For demo purposes, we'll just set a user
    if (email && password) {
      setUser({
        fullName: 'Marry Doe',
        email: email,
        phoneNumber: '555-123-4567',
        companyName: 'Acme Inc',
        isAgency: false
      });
      return true;
    }
    return false;
  };

  const signup = async (userData: User, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For demo purposes, we'll just set the user
    if (userData && password) {
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};