import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="false"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
            style={{ width: '100%', height:"500px"}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?cs=srgb&dl=pexels-photomix-company-230544.jpg&fm=jpg&_gl=1*7pepih*_ga*NDI2OTQ5NzY1LjE2NjgwMzQzNjM.*_ga_8JE65Q40S6*MTY2ODAzNDM3Mi4xLjEuMTY2ODAzNDUwOS4wLjAuMA.."
            alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{ width: '100%', height:"500px"}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632397.jpg&fm=jpg&_gl=1*18ze018*_ga*NDI2OTQ5NzY1LjE2NjgwMzQzNjM.*_ga_8JE65Q40S6*MTY2ODAzNDM3Mi4xLjEuMTY2ODAzNDY0NS4wLjAuMA.."
            alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{ width: '100%', height:"500px"}}
            className="d-block"
            src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632371.jpg&fm=jpg&_gl=1*wv52m4*_ga*NDI2OTQ5NzY1LjE2NjgwMzQzNjM.*_ga_8JE65Q40S6*MTY2ODAzNDM3Mi4xLjEuMTY2ODAzNDY4Ny4wLjAuMA.."
            alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <Products/>
    </div>
  );
};

export default Home;
