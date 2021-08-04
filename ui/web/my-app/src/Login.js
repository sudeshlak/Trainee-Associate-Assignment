import logo from './logo.svg';
import './App.css';
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import {useState} from "react";

function Login(props) {

    const {setUser} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (userName === '' || password === '') {
            setError("Email or password can't be empty");
            return;
        }
        //API
        await fetch("http://localhost/exam/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userName: userName, password: password}),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    setUser(data.user);
                    alert(data.massage);
                } else {
                    setError(data.massage)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Container className='px-5 py-5'>
            <Row className='justify-content-center'>
                <Col xs={4}>
                    <div className="App">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formUserName">
                                <Form.Label>User name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Enter User Name"
                                              value={userName} onChange={(event) => {
                                    setUserName(event.target.value)
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(event => {
                                                  setPassword(event.target.value)
                                              })}/>
                            </Form.Group>
                            <div className='text-danger py-3'><span>{error && error}</span></div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
