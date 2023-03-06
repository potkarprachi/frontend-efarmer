import "./LandingPage.css";
export function LandingPage() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src="./Corousel1.jpg"
              className="d-block w-100 c-img"
              alt="Farmer"
            />
            <div className="carousel-caption d-none d-md-block mt-4">
              <h1 className="display-1 fw-bolder text-capitalize">Welcome</h1>
              <p className="fs-3 text-uppercase mt-5">
                Making the farmers of India stronger
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="./Corousel2.jpg"
              className="d-block w-100 c-img"
              alt="Farmer With Bulls"
            />
            <div className="carousel-caption d-none d-md-block top-0 mt-4">
              <h1 className="display-1 fw-bolder text-capitalize">Baliraja</h1>
              <p className="fs-3 text-uppercase mt-5">
                A place for farmers to sell their products
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="./Corousel3.jpg"
              className="d-block w-100 c-img"
              alt="Vegetables"
            />
            <div className="carousel-caption d-none d-md-block mt-4">
              <p className="fs-3 text-uppercase mt-5">
                We want people to have their food at minimal price
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5 mb-5 container">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="./videoplayback.mp4" allowfullscreen style={{height:"400px",width:"1000px"}}></iframe>
        </div>
      </div>
    </>
  );
}
