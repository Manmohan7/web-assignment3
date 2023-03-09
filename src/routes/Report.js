const Report = () => {
  return (
    <>
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
            <li>Calculator Tool</li>
          </ul>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Research Done</h2>
          <p>We used various online resources to read more about react hooks and examples to appropriately implement them in the application. Furthermore, we researched events, props, and how to make components from the W3Schools website. </p>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Color Pallete</h2>
          <p>To keep things minimalistic, we have used only 2 colors - white and blue. Gives the whole website a cleaner look and feel.</p>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Getsalt Principles Used</h2>
          <p>We have used the continuation, proximity and similarity principles which can be noticed in all the pages having similar layout style and components that are physically close to each other are often related and may interact with each other.</p>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Hooks Used</h2>
          <ol>
            <li>useCallback - Checklist Tool (to add new items to the list)</li>
            <li>useContext - Gloabl (to store if user is logged in or not)</li>
            <li>useEffect - News API (to fetch the news from API when the component is loaded)</li>
            <li>useRef - Checklist Tool (to update the number of elements in the list)</li>
            <li>useState - Weather Tool (to store the name of the location)</li>
          </ol>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">APIs Used</h2>
          <p>We have used 3 different APIs - </p>
          <ol>
            <li>News - https://newsapi.org</li>
            <li>Weather - https://openweathermap.org</li>
            <li>Random Fox Image - https://randomfox.ca</li>
          </ol>
        </div>
      </section>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Participation Report</h2>
          <p>Both members contributed equally in the development. Manmohan worked on authentication, News API and Random Fox Image. Isha worked on Checklist Tool, Calculator Tool, Weather API.</p>
        </div>
      </section>
    </>
  )
}

export default Report