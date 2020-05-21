import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ff009c;
  text-align: center;
  color: #ff009c;
  font-size: 18px;
  padding: 5px;

  & + input{
    margin-top: 10px;
  }
`;
