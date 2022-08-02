import React, { useState } from 'react'
import iconErro from '../assets/images/icon-error.svg'

const FormContainer = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameState, setNameState] = useState(false)
    const [lastNameState, setLastNameState] = useState(false)
    const [emailState, setEmailState] = useState(false)
    const [passwordState, setPasswordState] = useState(false)

    const isValid = () => {
        name === '' ? setNameState(true) : setNameState(false)
        lastName === '' ? setLastNameState(true) : setLastNameState(false)
        email === '' ? setEmailState(true) : setEmailState(false)
        password === '' ? setPasswordState(true) : setPasswordState(false)
    }

    return (
        <div>
            <form>
                <fieldset>
                    <div style={{ border: '3px solid red' }}>
                        <input
                            required
                            placeholder="First Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div style={{ border: '3px solid red' }}>
                        <input
                            required
                            placeholder="Last Name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {lastNameState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div style={{ border: '3px solid red' }}>
                        <input
                            required
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div style={{ border: '3px solid red' }}>
                        <input
                            required
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <input
                        type="submit"
                        value="Claim your free trial"
                        onClick={isValid}
                    />
                </fieldset>
            </form>
            <p>
                <small>
                    By clicking the button, you are agreeing to our,
                    <span>Terms and Services</span>
                </small>
            </p>
        </div>
    )
}

export default FormContainer
