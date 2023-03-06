const Report = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="fs-1">Report</h1>
          </div>
        </div>


        <section className="row flex-column mt-4">
          <div className="col">
            <h2 className="fs-2">Functional Components Used</h2>
            <ul>
              <li>Header</li>
              <li>Footer</li>
              <li>CheckList Tool</li>
              <li>Weather Tool</li>
            </ul>
          </div>
        </section>

        <section className="row flex-column mt-4">
          <div className="col">
            <h2 className="fs-2">Research Done</h2>
            <p>I used various online resources to read more about react hooks and examples to appropriately implement them in the application.</p>
          </div>
        </section>

        <section className="row flex-column mt-4">
          <div className="col">
            <h2 className="fs-2">Media Query Used</h2>
            <p>Since bootstrap makes everything responsive by default, I have only used a media query to change the background image on the home page.</p>
          </div>
        </section>

        <section className="row flex-column mt-4">
          <div className="col">
            <h2 className="fs-2">Getsalt Principle Used</h2>
            <p>I have used the continuation and similarity principle which can be noticed in all the pages having similar layout style.</p>
          </div>
        </section>

        <section className="row flex-column mt-4">
          <div className="col">
            <h2 className="fs-2">Hooks Used</h2>
            <ol>
              <li>useState - Weather Tool</li>
              <li>useContext - Change Mode on Tools page</li>
              <li>useRef - Checklist Tool</li>
              <li>useEffect - Checklist Tool</li>
              <li>useCallback - Checklist Tool</li>
            </ol>
          </div>
        </section>
      </div>
    </>
  )
}

export default Report