import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const PersonForm = ({ name, email, setName, setEmail, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        <strong>
                            Nome:
                        </strong>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Digite o nome da pessoa"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>
                        <strong>
                            E-mail:
                        </strong>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Digite o e-mail da pessoa"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button block variant="success" type="submit">
                        Submeter
                    </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default PersonForm;