import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import StoreContext from '../StoreContext'

const User = () => {
  const navigate = useNavigate()
  
  const { user, setUser } = useContext(StoreContext)

  useEffect(() => {
    if(!user) {
      navigate('/login')
      return
    }
  }, [user, navigate])
  
  return (
    <div className="row justify-content-center">
      <div className="col-8 text-center pt-5 mt-5">
        <div className="card position-relative">
          <div className="card-body pt-5 mt-5">

            <div className="position-absolute top-0 start-50 translate-middle" style={{ backgroundColor: 'white' }}>
              <i className="bi bi-person-circle" style={{ fontSize: 96, color: "gray" }} />
            </div>

            <p>{user}</p>

            <button className="btn btn-outline-danger" onClick={() => setUser(null)}>Sign out</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default User