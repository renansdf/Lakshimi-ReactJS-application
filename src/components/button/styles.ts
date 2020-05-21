import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 3px;
  background-color: #ff009c;
  color: #000;
  border: 2px solid #ff009c;
  transition: background-color, color, .4s;
  padding: 8px 20px;
  margin-top: 10px;

  &:hover{
    background-color: #000;
    color: #ff009c;
  }
`;
