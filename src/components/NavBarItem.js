import { NavLink } from "react-router-dom"

const NavBarItem = ({ path, name }) => {
  return (
    <li className="nav-item">
      <NavLink to={path} end className={({ isActive }) =>
        (isActive ? 'nav-link active text-white' : 'nav-link text-white-50')
      }>{name}</NavLink>
    </li>
  )
}

export default NavBarItem