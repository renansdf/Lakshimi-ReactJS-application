import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ children, messages }) => {

  return (
    <Container>
      {messages.map(({ id, name, description, type }) => (
        <Toast key={id} id={id} name={name} description={description} type={type} />
      ))}
    </Container>
  );
}

export default ToastContainer;
