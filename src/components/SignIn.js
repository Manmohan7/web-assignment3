import { useState } from 'react'
import { signIn } from '../auth'

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signInUser = () => {
    signIn(email, password)
      .then(user => { setUser(user.user.email) })
      .catch(error => { setUser(null) })
  }
  
  return (
    <div className="row">
      <div className="col px-3 py-5">
        <div className="mb-3">
          <label htmlFor="signInEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="signInPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signInPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => signInUser()}>Sign in</button>
      </div>
    </div>
  )
}

export default SignIn