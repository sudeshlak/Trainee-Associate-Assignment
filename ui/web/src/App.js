import logo from './logo.svg';
import './App.css';
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import {useState} from "react";
import Login from "./Login";
import UserProfile from "./UserProfile";

function App() {
    const [user,setUser]=useState('');
return(
    <div>
        <Login setUser={setUser}/>
        <UserProfile user={user}/>
    </div>

);
}

export default App;
