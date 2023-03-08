import { NavLink } from "react-router-dom"
import { StyleSheet } from "react-native"

const NavBarItem = ({ path, name }) => {
  return (
    <li className="nav-item">
      <NavLink to={path} style={styles.NavLink} end className={({ isActive }) =>
        (isActive ? 'nav-link active' : 'nav-link')
      }>{name}</NavLink>
    </li>
  )
}
const styles = StyleSheet.create({
  NavLink: {
    color: '#fff',
  },

})
export default NavBarItem