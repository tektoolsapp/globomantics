import React from "react";
//import Toast from "react-bootstrap/Toast";
//import Container from "react-bootstrap/Container";
import { Toast } from "bootstrap";
//import { Container } from "bootstrap";

function ErrorToast() {
  return (
    <Toast>
      <Toast.Header>Error</Toast.Header>
      <Toast.Body>Something went wrong.</Toast.Body>
    </Toast>
  );
}

export default ErrorToast;

/* export default function App() {
  return (
    <Container>
      <ErrorToast />
    </Container>
  );
} */
