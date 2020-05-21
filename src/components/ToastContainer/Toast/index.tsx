import React, { useEffect } from 'react';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';
import { FiXCircle } from 'react-icons/fi';

const Toast: React.FC<ToastMessage> = ({ id, name, type, description }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    }
  }, [removeToast, id]);

  return (
    <Container key={id} type={type}>
      <strong>{name}</strong>
      {description}
      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}

export default Toast;
