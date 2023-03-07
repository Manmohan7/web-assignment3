import { useState } from 'react'
import { signUp } from '../auth'

const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const signUpUser = () => {
    signUp(email, password)
      .then(user => { setUser(user.user.email) })
      .catch(error => { setUser(null) })
  }
  
  return (
    <div className="row">
      <div className="col px-3 py-5 justify-content-center">
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="signUpPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signUpPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="signUpPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="signUpPassword2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={password === '' || password !== password2} onClick={() => signUpUser()}>Sign up</button>
      </div>
    </div>
  )
}

export default SignUp