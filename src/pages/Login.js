import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';

function Login(props) {

    const [validate, setValidated] = useState(false);

    const LoginButtonPressed = (e) => {
        alert("Login button pressed")
    }

    return (
        <>
            <Card style={{ margin: 24, }}>
                <Card.Header>
                    <Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Nandos_logo.svg/1200px-Nandos_logo.svg.png'} style={{ width: 80, marginBottom: 8 }} />
                    <h4>Admin Login</h4>
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>If you're an admin of Nandos please login below. If you don't have  an account please contact your administrator to get a login.</p>

                </Card.Header>
                <Card.Body>
                    <Form noValiate validated={validate} onSubmit={LoginButtonPressed}>

                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder='Enter admin email' size='md' />
                            <Form.Control.Feedback type='invalid'>Email is required.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter password' size='md' />
                            <Form.Control.Feedback type='invalid'>Password is required.</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant='primary' type='submit' size='md' style={{ fontWeight: 'bold' }} href='/dashboard'>
                            Login ❯
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>

                    <a href="/" style={{ marginTop: 8, fontSize: 12, }}>← Back to homepage</a>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Login;