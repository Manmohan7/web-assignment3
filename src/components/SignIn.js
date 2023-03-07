import { useState } from 'react'
import { signIn } from '../auth'


const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [viewModal, setViewModal] = useState(false)
  const [errCode, setErrCode] = useState('')

  const signInUser = () => {
    signIn(email, password)
      .then(user => { setUser(user.user.email) })
      .catch(error => {
        console.log(error)

        if(error.code === 'auth/invalid-email') {
          setErrCode('Invalid email entered!')
        } 
        
        if (error.code === 'auth/wrong-password') {
          setErrCode('Incorrect Password!')
        }
        
        setUser(null)
        setViewModal(true)
      })
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

      <div className={"modal " + (viewModal ? "show-modal" : "")} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <p className='fs-3'>{errCode}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => setViewModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn