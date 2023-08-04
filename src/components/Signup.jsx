import TextDetails from './TextDetails'
import signUpImg from '../assets/images/signUpImg.svg'
import signUpImgDesktop from '../assets/images/signUpImg-desktop.svg'
import { useEffect, useRef, useState } from 'react'
import '../App.css'

const Signup = ({ email, setEmail, error, setError }) => {
    const errorRef = useRef()
    const btnRef = useRef(false)
    const inputField = document.getElementById('email')
    console.log(inputField)

    const [formSubmitted, setFormSubmitted] = useState(false);

    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        btnRef.current.disabled = true
        checkEmailError();
        }


    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const checkEmailError = () => {
        // checks error and set error
        emailRegex.test(email) ? setError(false) : setError(true)

    }


    useEffect(() => {

        if (errorRef.current && formSubmitted) {
            errorRef.current.classList.add('fade-out');
            inputField.classList.add('errorE');
            setTimeout(() => {
                errorRef.current.classList.remove('fade-out');
                btnRef.current.disabled = false
                inputField.classList.remove("errorE")
            }, 805);

        }
        setFormSubmitted(false);


    }, [formSubmitted]);




    return (
        <div className="container">

            <section className='detailSection'>
                <TextDetails />

                <form onSubmit={handleSubmit} className='d-flex'>
                    <label htmlFor="email" className='| bold'><span>Email address</span> {error && <span ref={errorRef} className='error | bold ' >Valid email required</span>}</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        required
                        className=' | buttonStyle bold'
                    />
                    <button type="submit" ref={btnRef} className='submitBtn | buttonStyle bold'>Subscribe to monthly newsletter</button>
                </form>
            </section>

            <section className='imageSection'>
                <picture>
                    <source media="(min-width:800px)" srcSet={signUpImgDesktop} />
                    <source media="(min-width:400px)" srcSet={signUpImg} />
                    <img src={signUpImg} alt="newsLetter image" />
                </picture>

            </section>
        </div>
    )

}
export default Signup
