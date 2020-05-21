import React, { useCallback } from 'react';
import { Container, Content } from './styles';
import logoImg from '../../images/lotus.svg';
import { Form } from '@unform/web';
import Input from '../../components/input';
import Button from '../../components/button';
import { useToast } from '../../hooks/toast';

const SignIn: React.FC = () => {
  const { addToast } = useToast();

  const handleSubmit = useCallback((data) => {
    console.log(data);

    addToast({
      name: 'login successfull',
      type: 'success',
      description: 'Você será redirecionado para o dashboard.',
    });
  }, [addToast]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Lakshmi Logo" />
        <h1>Lakshmi</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" />
          <Input name="password" type="password" />
          <Button type="submit">Sign in</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default SignIn;
