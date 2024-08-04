
const Events = () => {
  return (
    <>
        <section className="Events"> 
        <div className="container py-3">
            <div className="row py-3">
                <div className="col-lg-8 m-auto text-center">
                    <h1>NEW AND UPCOMING EVENTS</h1>
                    <h6>Join your favourite event via us and have a chance to invest in your favourite artist shows and programs</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 text-center">
                    <div className="card shadow-sm bg-body rounded" style={{ width: '18rem' }}>
                        <img src="../src/assets/images/Theta/MEvebts1.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Music fest</h5>
                          <p className="card-text"></p>
                          <i className="fas fa-heart"></i>
                          <a href="#" className="btn btn-primary ms-4">Pay with Tfuel</a>
                        </div>
                      </div>
                      <h6>Entrance fee</h6>
                      <p>$10</p>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="card shadow-sm bg-body rounded" style={{ width: '18rem' }}>
                        <img src="../src/assets/images/Theta/music_event.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Concert</h5>
                          <p className="card-text"></p>
                          <i className="fas fa-heart"></i>
                          <a href="#" className="btn btn-primary ms-4">Pay with Tfuel</a>
                        </div>
                      </div>
                      <h6>Entrance fee</h6>
                      <p>$12</p>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="card shadow-sm bg-body rounded" style={{ width: '18rem' }}>
                        <img src="../src/assets/images/Theta/music_concert.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Show</h5>
                          <p className="card-text"></p>
                          <i className="fas fa-heart"></i>
                          <a href="#" className="btn btn-primary ms-4">Pay with Tfuel</a>
                        </div>
                      </div>
                      <h6>Entrance fee</h6>
                      <p>free</p>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="card shadow-sm bg-body rounded" style={{ width: '18rem' }}>
                        <img src="../src/assets/images/Theta/msic_fest.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Live session</h5>
                          <p className="card-text"></p>
                          <i className="fas fa-heart"></i>
                          <a href="#" className="btn btn-primary ms-4">Pay with Tfuel</a>
                        </div>
                      </div>
                      <h6>Entrance fee</h6>
                      <p>$21</p>
                </div>

            </div>   
                
        </div>
    </section>
    </>
  )
}

export default Events