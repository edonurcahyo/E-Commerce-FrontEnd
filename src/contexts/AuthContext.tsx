
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller';
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'buyer' | 'seller') => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call to verify credentials
    if (password.length < 6) {
      throw new Error('Invalid credentials');
    }

    // Mock user data
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role: 'buyer',
      avatar: '/placeholder.svg',
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  // Mock register function
  const register = async (name: string, email: string, password: string, role: 'buyer' | 'seller') => {
    // In a real app, this would be an API call to create user
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Mock user data
    const mockUser: User = {
      id: '1',
      name,
      email,
      role,
      avatar: '/placeholder.svg',
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
