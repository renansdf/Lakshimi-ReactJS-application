import React from 'react';
import { ToastProvider } from '../hooks/toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}

export default AppProvider;
