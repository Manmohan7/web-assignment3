import CheckList from "../components/CheckList"
import Calculator from "../components/Calculator"

const Tools = () => {

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h1>Tools</h1>
        </div>
      </div>

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
          <h2>Calculator</h2>
        </div>
        <div className="col">
          <Calculator />
        </div>
      </section>
    </>
  )
}

export default Tools