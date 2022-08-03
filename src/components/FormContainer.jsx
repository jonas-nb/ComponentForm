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
        <div className="xl:w-[50rem] mb-10 rounded-lg m-auto mt-5 max-w-[320px] xl:max-w-[560px] bg-white flex flex-col justify-around items-center ">
            <form className="w-full  block">
                <fieldset className="flex flex-col items-center">
                    <div className="rounded-md h-12 border flex items-center justify-between p-2 mt-4 w-11/12">
                        <input
                            className="text-[0.8rem] placeholder:pl-2 placeholder:font-[600] w-10/12 h-full outline-none"
                            required
                            placeholder="First Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div className="rounded-md h-12 border flex items-center justify-between p-2 mt-4 w-11/12">
                        <input
                            className="text-[0.8rem] placeholder:pl-2 placeholder:font-[600] w-10/12 h-full outline-none"
                            required
                            placeholder="Last Name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {lastNameState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div className="rounded-md h-12 border flex items-center justify-between p-2 mt-4 w-11/12">
                        <input
                            className="text-[0.8rem] placeholder:pl-2 placeholder:font-[600] w-10/12 h-full outline-none"
                            required
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <div className="rounded-md h-12 border flex items-center justify-between p-2 mt-4 w-11/12">
                        <input
                            className="text-[0.8rem] placeholder:pl-2 placeholder:font-[600] w-10/12 h-full outline-none"
                            required
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordState === true ? <img src={iconErro} /> : ''}
                    </div>
                    <input
                        className="text-white m-auto mt-7 cur w-11/12 h-14 rounded-md uppercase font-[600] bg-[#38cc8c] shadow-[0_3px_1px_0px_#008d28ed] p-1 flex items-center justify-center cursor-pointer"
                        type="submit"
                        value="Claim your free trial"
                        onClick={isValid}
                    />
                </fieldset>
            </form>
            <p className="mt-4 p-5 text-center text-[#606060]">
                <small>
                    By clicking the button, you are agreeing to our
                    <span className="text-[#ff7a7a] pl-1 font-[600]">
                        Terms and Services
                    </span>
                </small>
            </p>
        </div>
    )
}

export default FormContainer
