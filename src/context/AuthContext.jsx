import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

// Mock user data
const mockUsers = [
  {
    id: 1,
    email: 'neo.anderson@matrix.com',
    password: 'matrix123',
    name: 'Neo Anderson',
    type: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neo',
    department: 'IT'
  },
  {
    id: 2,
    email: 'hr@example.com',
    password: 'hr123',
    name: 'Sarah Connor',
    type: 'hr',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    department: 'Human Resources'
  },
  {
    id: 3,
    email: 'user@example.com',
    password: 'user123',
    name: 'John Doe',
    type: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    department: 'Marketing'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('auth.user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth.user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth.user');
    }
  }, [user]);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      navigate('/dashboard');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth.user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};