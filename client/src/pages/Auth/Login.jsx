import React, {useState} from 'react'
import styles from './Login.module.css'
import login from '../../assets/login.png'
import { Link } from 'react-router-dom'
import {Button, Input} from 'antd'


function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    
    const handleSubmit = () => {
        console.log("login")
    }
  return (
    <div>
        <div className={styles.login__card}>
            <img src={login} alt="" />
            <h4>Login</h4>
            <div className={styles.input__wrapper}>
                <Input 
                placeholder="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className={styles.input__wrapper}>
                <Input.Password
                placeholder="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class name={styles.input__info}>
                New Use? <Link to="/register">Register</Link>
            </div>
            <Button type = "primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Login</Button>
        </div>
    </div>
  )
}

export default Login