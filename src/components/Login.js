import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ onLogin }) {
    // const [formValues, setFormValues] = useState({
    //     email: '',
    //     password: '',
    // });
    // const [error, setError] = useState('');

    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (formValues.email && formValues.password) {
    //         try {
    //             const response = await axios.post('http://localhost:8080/api/users/login', {
    //                 email: formValues.email,
    //                 password: formValues.password,
    //             });
    //             if (response.status === 200) {
    //                 onLogin();
    //                 navigate('/home', { state: { message: 'Login Successful' } });
    //             }
    //         } catch (error) {
    //             setError('Invalid credentials');
    //         }
    //     }
    // };


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        if (result.data === 'yes') {
            onLogin();
          navigate('/');
        }
      }).catch(err => console.log(err))
  
    }


    return (
        <div className="login-page-wrapper">
            {/* <video autoPlay loop muted className="background-video">
                <source src="/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div className="login-page">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={(email) => setEmail(email.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(pass) => setPassword(pass.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                        <div className="text">
                            Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
