import { createContext, useState, useContext } from 'react';

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = !!user;

  const login = async (email, password) => {
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

  const signup = async (userData, password) => {
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
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};