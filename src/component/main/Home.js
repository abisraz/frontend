import React from 'react'

const HOME = () => {
  return (
    <div>
      <>
        {/* Carousel wrapper */}
        <div
          id="carouselMaterialStyle"
          className="carousel slide carousel-fade "
          data-mdb-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselMaterialStyle"
              data-mdb-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"

            />
            <button
              type="button"
              data-mdb-target="#carouselMaterialStyle"
              data-mdb-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-mdb-target="#carouselMaterialStyle"
              data-mdb-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          {/* Inner */}
          <div className="carousel-inner rounded-5 shadow-4-strong ">
            {/* Single item */}
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=600"
                className=" d-block w-100 "
                alt="Sunset Over the City"
                style={{ width: 500, height: 300 }}
              />
              <div className="carousel-caption d-none d-md-block ">
             
                <h5>First slide label</h5>
                <p  style={{color: 'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               
              </div>
            </div>
            {/* Single item */}
            <div className="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className="d-block w-100"
                alt="Canyon at Nigh"
                style={{ width: 500, height: 300 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            {/* Single item */}
            <div className="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                className="d-block w-100"
                alt="Cliff Above a Stormy Sea"
                style={{ width: 500, height: 300 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* Inner */}
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Carousel wrapper */}
      </>

      <div className="container marketing">
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://images.pexels.com/photos/5514984/pexels-photo-5514984.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-circle shadow-4"
              style={{ width: 150 }}
              alt="Avatar"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 mt-6">
            <img
              src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-circle shadow-4"
              style={{ width: 150 }}
              alt="Avatar"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <img
              src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-circle shadow-4"
              style={{ width: 150 }}
              alt="Avatar"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              First featurette heading.{" "}
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to give
              you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And lastly, this one.{" "}
              <span className="text-body-secondary">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply here
              to give you a better view of what this would look like with some
              actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
        {/* /END THE FEATURETTES */}
      </div>

      {/* /.container */}
      {/* FOOTER */}
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>



  )
}





export default HOME
