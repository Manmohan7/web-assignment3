import { useContext } from "react"
import ThemeContext from "../ThemeContext"

const ChangeMode = () => {
  const { mode, setMode } = useContext(ThemeContext)

  return (
    <>
      <aside className="alert alert-dark row my-5 p-3 align-items-center justify-content-evenly">
        <div className="col-auto">
          <span>You can change the mode from here</span>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Change Mode</button>
        </div>
      </aside>
    </>
  )
}

export default ChangeMode