import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 483px;
  background: #fff;
  border: solid 14px #BD00FF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 60px;
    color: #BD00FF;
    margin-bottom: 50px;
  }

  img{
    max-width: 188px;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
