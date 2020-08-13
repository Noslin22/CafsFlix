import React from 'react';
import { Container, TitleMsg, Msg } from './styles';

function ErrorMsg() {
  return (
    <Container>
      <TitleMsg>Oops!</TitleMsg>
      <Msg>We can&apos;t seem to find the page you&apos;re looking for.</Msg>
    </Container>
  );
}

export default ErrorMsg;
