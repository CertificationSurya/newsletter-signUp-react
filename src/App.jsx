import { useState } from "react"
import Modal from "./components/Modal"
import Signup from "./components/Signup"
import "./App.css"

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)


  return (
    <>
      {(error === null || error === true) ? (
        <Signup email={email} setEmail={setEmail} error={error} setError={setError} />
      ) : (
        <Modal email={email} setError={setError} />
      )}

    </>
  )
}

export default App
