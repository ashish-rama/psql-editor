import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { Button, Input } from '../styledComponents';

function Login() {

    const [ { user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        history.push('/psqlEditor');
        dispatch({
            type: "SET_USER",
            user: email
        })
    }

    const register = e => {
        e.preventDefault();
        history.push('/psqlEditor');
        dispatch({
            type: "SET_USER",
            user: email
        })
    }

    return (
        <div className="login" style={{backgroundColor:"white", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="login__container" 
                style={{
                    marginTop: "20px",
                    width: "300px",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "5px",
                    border: "1px solid lightgray",
                    padding: "20px",
                }}
            >
                <h1 style={{ fontWeight: "500", marginBottom: "20px" }}>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <Input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>

                    <h5>Password</h5>
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                </form>

                <Button type="submit" onClick={signIn} className="login__signInButton">Sign In</Button>
                <Button onClick={register} className="login__registerButton">Register</Button>
            </div>
        </div>
    )
}

export default Login
