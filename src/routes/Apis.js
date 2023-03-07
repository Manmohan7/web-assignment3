import Fox from "../components/Fox"
import News from "../components/News"
import Weather from "../components/Weather"

const APIs = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h1>APIs</h1>
        </div>
      </div>

      <section className="row flex-column mt-3">
        <div className="col">
          <h2>Weather</h2>
        </div>
        <div className="col">
          <Weather />
        </div>
      </section>

      <hr className="my-5" />

      <section className="row flex-column mt-3">
        <div className="col">
          <h2>News</h2>
        </div>
        <div className="col">
          <News />
        </div>
      </section>

      <hr className="my-5" />

      <section className="row flex-column mt-3">
        <div className="col">
          <h2>Random Fox Image</h2>
        </div>
        <div className="col">
          <Fox />
        </div>
      </section>
    </>
  )
}

export default APIs