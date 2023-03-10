import { Link } from "react-router-dom"
import routes from "../routes"
import NavBarItem from "./NavBarItem"

const Header = () => {
  return (
    <header className="mb-1">
      <nav className="navbar navbar-expand-lg bg-primary border-bottom" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Assignment 3</Link>

          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                routes
                  .map(({ path, name }) => {
                    if (path === '/login') {
                      return (
                        <NavBarItem key={path} path={path} name={<i className="bi bi-person-circle"></i>} />
                      )
                    } else if (path === '/user') {
                      return null
                    } else {
                      return (<NavBarItem key={path} path={path} name={name} />)
                    }
                  })
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header