import { Link } from "react-router-dom"
import routes from "../routes"
import NavBarItem from "./NavBarItem"

const Header = () => {
  return (
    <header className="mb-1" style={styles.container}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={styles.navbaritem}>Assignment 3</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={styles.navbaritem}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                routes
                  .map(({ path, name }) => {
                    if (path === '/login') {
                      return (
                        <NavBarItem key={path} path={path} name={<i className="bi bi-person-circle" style={styles.navbaritem}></i>} />
                      )
                    } else if (path === '/user') {
                      return null
                    } else {
                      return (<NavBarItem key={path} path={path} name={name} style={styles.navbaritem} />)
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


const styles = {
  container: {
    backgroundColor: '#0d6efd',
  },
  navbaritem: {
    color: '#fff',
  },
};
export default Header