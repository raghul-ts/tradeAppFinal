import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
function SignUp({ onSignUp }) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/signup', {name, email, password})
      .then(result => {
        navigate('/login');
      })
      .catch(error => console.log(error));
    }
    // const [formValues, setFormValues] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // });

    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const errors = validate(formValues);
    //     setFormErrors(errors);
    //     setIsSubmit(true);
    //     if (Object.keys(errors).length === 0) {
    //         try {
    //             await fetch('http://localhost:8080/api/users/signup', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     name: formValues.username,
    //                     email: formValues.email,
    //                     password: formValues.password,
    //                 }),
    //             });
    //             navigate('/login');
    //         } catch (error) {
    //             console.error('Sign up failed:', error);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors, formValues, isSubmit]);

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.username) {
    //         errors.username = 'Username is required!';
    //     }
    //     if (!values.email) {
    //         errors.email = 'Email is required!';
    //     } else if (!regex.test(values.email)) {
    //         errors.email = 'This is not a valid email format!';
    //     }
    //     if (!values.password) {
    //         errors.password = 'Password is required';
    //     } else if (values.password.length < 4) {
    //         errors.password = 'Password must be more than 4 characters';
    //     } else if (values.password.length > 10) {
    //         errors.password = 'Password cannot exceed more than 10 characters';
    //     }
    //     if (values.password !== values.confirmPassword) {
    //         errors.confirmPassword = 'Those passwords didn’t match. Try again.';
    //     }
    //     return errors;
    // };

    return (
        <div className="signup-page-wrapper">
            {/* <video autoPlay loop muted className="background-video">
                <source src="/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div className="signup-page">
                <div className="signup-container">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                                onChange={(e) => setName(e.target.value)}
                                />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        {/* <p className="error-text">{formErrors.password}</p>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error-text">{formErrors.confirmPassword}</p> */}
                        <button type="submit" className="signup-button">
                            Sign Up
                        </button>
                        <div className="text">
                            Already have an account? <span onClick={() => navigate('/login')}>Login</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
