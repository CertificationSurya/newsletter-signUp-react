import React from 'react'
import successSvg from "../assets/images/icon-success.svg"

const Modal = ({ email, setError }) => {
    const handleDismiss = () => {
        setError(null)
    }

    return (
        <div className='modal'>
            <img src={successSvg} alt="tick icon" />
            <h1 className='heading'>Thanks for subscribing!</h1>
            <p className="| small">A confirmation email has been sent to <span className='email | bold'> {email}</span>. Please open it and click the button inside to confirm your subscription</p>
            <button className='btn bold buttonStyle' onClick={handleDismiss}>Dismiss message</button>
        </div>
    )
}

export default Modal
