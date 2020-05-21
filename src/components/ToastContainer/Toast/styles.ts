import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
}

export const Container = styled.div<ToastProps>`
  color: #fff;
  font-size: 14px;
  width: 300px;
  height: auto;
  border-radius: 5px;
  background-color: #000;
  padding: 20px 30px;

  strong{
    font-size: 20px;
    display: block;
  }

  & + div{
    margin-top: 20px;
  }

  button{
    color: #fff;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 15px;
  }

  ${(props) => props.type === 'success' && css`
    background-color: green;
  `}

  ${(props) => props.type === 'error' && css`
    background-color: red;
  `}

  ${(props) => props.type === 'info' && css`
    background-color: blue;
  `}
`;
