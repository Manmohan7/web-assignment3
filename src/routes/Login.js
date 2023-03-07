import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import StoreContext from "../StoreContext"

import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Login = () => {
  const {user, setUser} = useContext(StoreContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate('/user')
      return
    }
  }, [user, navigate])

  return (
    <div className="row justify-content-center p-5">
      <div className="col-6">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Sign In</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Sign Up</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <SignIn setUser={setUser} />
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <SignUp setUser={setUser} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login