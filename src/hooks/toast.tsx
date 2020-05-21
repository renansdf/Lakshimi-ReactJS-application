import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

interface ToastContextProps {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  name: string;
  type?: 'info' | 'success' | 'error';
  description?: string;
}

const ToastContext = createContext({} as ToastContextProps);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ name, description, type }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();
    const toast = {
      id,
      name,
      description,
      type
    }

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter(state => state.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast context must be used inside the toast context.');
  }

  return context;
}

export { useToast, ToastProvider };
