import { Link } from 'react-router-dom';
import '../../../components/assets/LoginCard/LoginCard.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {

    // const loginwithgoogle=()=>{     
    //     window.open("http://localhost:8000/auth/google/callback", "_self");
    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        let url = "http://localhost:8000/Login";
        axios.post(url, { email: email, password: password })
            .then((res) => {
                alert("You are successfully logged in!");

                const token = res.data.token;
                localStorage.setItem('token', token);
                navigate("/admin");
            })
            .catch((error) => {
                console.error("Error logging in:", error);
                alert("Invalid email or password. Please try again.");
            });
    }

    return (
        <>
            <div className="login__card__container">
                <div className="login__card">
                    <div className="login__header">
                        <h1>Login</h1>
                    </div>
                    <div className="login__inputs">
                        <div className="email__input__container input__container">
                            <label className="email__label input__label">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="email__input login__input" placeholder='Enter Your Email' required />
                        </div>
                        <div className="password__input__container input__container">
                            <label className="password__label input__label">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="password__input login__input" placeholder='Enter your Password' required />
                        </div>
                        <div className="login__button__container">
                            <button className="login__button" onClick={handleSubmit} >LOGIN</button>

                            {/* <button><a href='http://localhost:8000/auth'>Login With Google</a></button> */}

                        </div>
                        <div>
                        {/* <button onClick={loginwithgoogle}> Login With Google</button> */}
                        </div>
                       
                    </div>
                    <div className="login__other__actions">
                        <div className="login__forgot__password">Forgot password?</div>
                        <div className="login__new__account">Don't have an account? <Link to="/register" className='link_login'>Create account</Link> </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginCard;
