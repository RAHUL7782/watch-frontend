import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../components/assets/RegisterCard/RegisterCard.css';


const RegisterCard = () => {

    
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    }
    const handleSubmit = () => {
        let url = "http://localhost:8000/registration";
        axios.post(url, input).then((res) => {
            alert("You are succesfully registered!");
        });
        
    }

    return (
        <>


            <div className="register__card__container">
                <div className="register__card">
                    <div className="register__header">
                        <h1>Create Account</h1>
                    </div>
                    <div className="register__inputs">
                        {/* <div className="fname__input__container reg__input__container">
                            <label className="fname__label input__label">First name</label>
                            <input type="text" name="userfirstname" required
                                value={input.userfirstname}
                                onChange={handleInput} 
                                className="fname__input register__input" />
                        </div> */}
                        <div className="lname__input__container reg__input__container">
                            <label className="lname__label input__label">Full name</label>
                            <input type="text" name="username"
                                value={input.username}
                                onChange={handleInput} className="lname__input register__input" placeholder='Enter Your Name' />
                        </div>
                        <div className="email__input__container reg__input__container">
                            <label className="email__label input__label">Email</label>
                            <input type="email" name="email"
                                value={input.email}
                                onChange={handleInput} className="email__input register__input" placeholder='example@gmail.com' />
                        </div>
                        <div className="password__input__container reg__input__container">
                            <label className="password__label input__label">Password</label>
                            <input type="password" name="password"
                                value={input.password}
                                onChange={handleInput} className="password__input register__input" placeholder='Enter your password' />
                        </div>
                        <div className="register__button__container">
                            <button className="register__button" onClick={handleSubmit}>Create Account</button>
                        </div>
                    </div>
                    <div className="register__other__actions">
                        <div className="register__login__account" >Already have account? <Link to="/login" className='link-reg'>Login</Link></div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default RegisterCard;