import { useEffect, useState } from 'react'

const FOX_API = `https://randomfox.ca/floof/`

const Fox = () => {
  const [url, setUrl] = useState('')
  
  const getFoxImage = async () => {
    try {
      const response = await (await fetch(FOX_API)).json()

      setUrl(response.image)

    } catch(e) {
      console.log('error occurred', e)
    }
  }

  useEffect(() => {
    getFoxImage()
  }, [])
  
  return (
    <div className="row justify-content-center g-2">
      <div className="col-auto">
        <img src={url} className="img-fluid" alt="random fox" />
      </div>
    </div>
  )
}

export default Fox