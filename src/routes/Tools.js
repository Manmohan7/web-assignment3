import { useState } from "react"
import ThemeContext from "../ThemeContext";
import CheckList from "../components/CheckList"
import Weather from "../components/Weather"


const Tools = () => {
  const [mode, setMode] = useState('light');
  const value = { mode, setMode }

  return (
    <ThemeContext.Provider value={value}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Tools</h1>
          </div>
        </div>

        <section className="row mt-3">
          <div className="col">
            <p>Theme is set to `{mode}` and can be changed from inside the child components.</p>
          </div>
        </section>

        <section className="row flex-column mt-3">
          <div className="col">
            <h2>CheckList</h2>
          </div>
          <div className="col">
            <CheckList />
          </div>
        </section>

        <section className="row flex-column mt-3">
          <div className="col">
            <h2>Weather</h2>
          </div>

          <div className="col">
            <Weather />
          </div>
        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default Tools