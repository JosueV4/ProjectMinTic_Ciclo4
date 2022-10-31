import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default class login extends React.Component { ///Se llama escribiendo ccc y enter
  constructor(props) {
    super(props);
    this.state = {
        usuario: '',
        pass:'',
    };
  }
iniciarSesion(){
    alert('Botón de Iniciar Sesion');
}
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control onChange={(e) => this.setState({ usuario: e.target.value })}/>
                  {/* {this.state.usuario} --> para comprobar que esta capturando los datos */ } 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value })}/>
                  {/* {this.state.pass} */}
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={()=>{
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesion
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
