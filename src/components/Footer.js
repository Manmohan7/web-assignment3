
const Footer = () => {
  return (
    <footer className="mt-5" style={styles.container}>
      <div className="container">
        <div className="row footer justify-content-evenly align-items-center">
          <div className="col-auto">
            <p className="fs-5">Manmohan Singh - #200528328</p>
            <p className="fs-5">Isha Shekh - #200523856</p>
          </div>
          <div className="col-auto">
            {/* <p>#200528328</p>
            <p>#200523856</p> */}
            <p className="fs-1">MDEV1005 W23</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  ontainer: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    width: '100%',
    bottom: 0,
  },
};


export default Footer