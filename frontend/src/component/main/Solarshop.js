import React from 'react'

const Solarshop = () => {
  return (
    <>
  <div id="navbar-main">
    {/* Fixed navbar */}
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            {" "}
            <span className="icon-bar" /> <span className="icon-bar" />{" "}
            <span className="icon-bar" />{" "}
          </button>
          <a className="navbar-brand" href="#home">
            <i className="fa fa-location-arrow" /> Ascend
          </a>{" "}
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#about" className="smoothScroll">
                {" "}
                About
              </a>
            </li>
            <li>
              {" "}
              <a href="#services" className="smoothScroll">
                {" "}
                Services
              </a>
            </li>
            <li>
              {" "}
              <a href="#portfolio" className="smoothScroll">
                {" "}
                Portfolio
              </a>
            </li>
            <li>
              {" "}
              <a href="#team" className="smoothScroll">
                {" "}
                Team
              </a>
            </li>
            <li>
              {" "}
              <a href="#contact" className="smoothScroll">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/*/.nav-collapse */}
      </div>
    </div>
  </div>
  {/* ==== HEADERWRAP ==== */}
  <div id="headerwrap" name="home">
    <header className="clearfix">
      <h1>Design, Development, Marketing.</h1>
      <p>
        Lorem ipsum dolor sit amet, cu menandri molestiae voluptaria eam,
        <br />
        invidunt reprehendunt nec ei. Sonet regione consulatu vel id.
      </p>
      <a href="#portfolio" className="smoothScroll btn btn-lg">
        See Our Works
      </a>{" "}
    </header>
  </div>
  {/* /headerwrap */}
  {/* ==== ABOUT ==== */}
  <div id="about" name="about">
    <div className="container">
      <div className="row white">
        <div className="col-md-6">
          {" "}
          <img
            className="img-responsive"
            src="assets/img/about/about1.jpg"
            align=""
          />{" "}
        </div>
        <div className="col-md-6">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos
            porro veniam. An everti maiorum detracto mea. Eu eos dicam
            voluptaria, erant bonorum albucius et per, ei sapientem accommodare
            est. Saepe dolorum constituam ei vel. Te sit malorum ceteros
            repudiandae, ne tritani adipisci vis.
          </p>
          <h3>Why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos
            porro veniam. An everti maiorum detracto mea. Eu eos dicam
            voluptaria, erant bonorum albucius et per, ei sapientem accommodare
            est. Saepe dolorum constituam ei vel.
          </p>
        </div>
      </div>
      {/* row */}
    </div>
  </div>
  {/* container */}
  {/* ==== SERVICES ==== */}
  <div id="services" name="services">
    <div className="container">
      <div className="row">
        <h2 className="centered">Our Services</h2>
        <hr />
        <div className="col-lg-8 col-lg-offset-2">
          <p className="large">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
        <div className="col-lg-3 callout">
          {" "}
          <i className="fa fa-desktop fa-3x" />
          <h3>Responsive Design</h3>
          <p>
            Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu
            vim oratio conclusionemque, vel at errem nominavi delicatissimi.
          </p>
        </div>
        <div className="col-lg-3 callout">
          {" "}
          <i className="fa fa-gears fa-3x" />
          <h3>Web Development</h3>
          <p>
            Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu
            vim oratio conclusionemque, vel at errem nominavi delicatissimi.
          </p>
        </div>
        <div className="col-lg-3 callout">
          {" "}
          <i className="fa fa-dot-circle-o fa-3x" />
          <h3>Social Marketing</h3>
          <p>
            Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu
            vim oratio conclusionemque, vel at errem nominavi delicatissimi.
          </p>
        </div>
        <div className="col-lg-3 callout">
          {" "}
          <i className="fa fa-shopping-cart  fa-3x" />
          <h3>eCommerce Consulting</h3>
          <p>
            Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu
            vim oratio conclusionemque, vel at errem nominavi delicatissimi.
          </p>
        </div>
      </div>
      {/* row */}
    </div>
  </div>
  {/* container */}
  {/* ==== PORTFOLIO ==== */}
  <div id="portfolio" name="portfolio">
    <div className="container">
      <div className="row">
        <h2 className="centered">Our Portfolio</h2>
        <hr />
        <div className="col-lg-8 col-lg-offset-2 centered">
          <p className="large">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
      {/* /row */}
      <div className="container">
        <div className="row">
          {/* PORTFOLIO IMAGE 1 */}
          <div className="col-md-4 ">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio01.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>UX / UI</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* MODAL SHOW THE PORTFOLIO IMAGE. In this demo, all links point to this modal. You should create
						      a modal for each of your projects. */}
          <div
            className="modal fade"
            id="myModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h4 className="modal-title">Project Title</h4>
                </div>
                <div className="modal-body">
                  <p>
                    <img
                      className="img-responsive"
                      src="assets/img/portfolio/folio01-preview.jpg"
                      alt=""
                    />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, quo meis audire placerat eu, te
                    eos porro veniam. An everti maiorum detracto mea. Eu eos
                    dicam voluptaria, erant bonorum albucius et per, ei
                    sapientem accommodare est. Saepe dolorum constituam ei vel
                  </p>
                  <p>
                    <b>
                      <a href="#">Visit Site</a>
                    </b>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          {/* PORTFOLIO IMAGE 2 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio02.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>CONCEPT</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* PORTFOLIO IMAGE 3 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio03.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>MOBILE UI KIT</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
        </div>
        {/* /row */}
        {/* PORTFOLIO IMAGE 4 */}
        <div className="row">
          <div className="col-md-4 ">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio04.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>CONCEPT</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* PORTFOLIO IMAGE 5 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio05.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>UX / UI</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* PORTFOLIO IMAGE 6 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio06.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>CMS INTEGRATION</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
        {/* PORTFOLIO IMAGE 7 */}
        <div className="row">
          <div className="col-md-4 ">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio07.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>MOCKUP</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* PORTFOLIO IMAGE 8 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio08.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>WEB ICONS</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* PORTFOLIO IMAGE 9 */}
          <div className="col-md-4">
            <div className="grid mask">
              <figure>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio09.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>UX / UI</h5>
                  <a
                    data-toggle="modal"
                    href="#myModal"
                    className="btn btn-default"
                  >
                    More Details
                  </a>{" "}
                </figcaption>
                {/* /figcaption */}
              </figure>
              {/* /figure */}
            </div>
            {/* /grid-mask */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
      </div>
      {/* /row */}
    </div>
  </div>
  {/* /container */}
  {/* ==== TEAM MEMBERS ==== */}
  <div id="team" name="team">
    <div className="container">
      <div className="row centered">
        <h2 className="centered">Meet Our Team</h2>
        <hr />
        <div className="col-lg-3 centered">
          {" "}
          <img
            className="img img-circle"
            src="assets/img/team/team01.jpg"
            height="120px"
            width="120px"
            alt=""
          />
          <h4>Jessica Wally</h4>
          <p>
            Albucius consectetuer eu nam. Saepe legendos vulputate eu quo, id
            mea comprehensam signifer.
          </p>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-facebook" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>{" "}
        </div>
        <div className="col-lg-3 centered">
          {" "}
          <img
            className="img img-circle"
            src="assets/img/team/team02.jpg"
            height="120px"
            width="120px"
            alt=""
          />
          <h4>Mike Sloan</h4>
          <p>
            Albucius consectetuer eu nam. Saepe legendos vulputate eu quo, id
            mea comprehensam signifer.
          </p>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-facebook" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>{" "}
        </div>
        <div className="col-lg-3 centered">
          {" "}
          <img
            className="img img-circle"
            src="assets/img/team/team03.jpg"
            height="120px"
            width="120px"
            alt=""
          />
          <h4>Michele Doe</h4>
          <p>
            Albucius consectetuer eu nam. Saepe legendos vulputate eu quo, id
            mea comprehensam signifer.
          </p>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-facebook" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>{" "}
        </div>
        <div className="col-lg-3 centered">
          {" "}
          <img
            className="img img-circle"
            src="assets/img/team/team04.jpg"
            height="120px"
            width="120px"
            alt=""
          />
          <h4>Larry Evans</h4>
          <p>
            Albucius consectetuer eu nam. Saepe legendos vulputate eu quo, id
            mea comprehensam signifer.
          </p>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-facebook" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>{" "}
        </div>
        <div className="col-lg-8 col-lg-offset-2 centered">
          <p className="large">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
    {/* row */}
  </div>
  {/* container */}
  {/* ==== CONTACT ==== */}
  <div id="contact" name="contact">
    <div className="container">
      <div className="row">
        <h2 className="centered">Contact Us</h2>
        <hr />
        <div className="col-md-4 centered">
          {" "}
          <i className="fa fa-map-marker fa-2x" />
          <p>
            321 Awesome Street
            <br />
            New York, NY 17022
          </p>
        </div>
        <div className="col-md-4">
          {" "}
          <i className="fa fa-envelope-o fa-2x" />
          <p>info@companyname.com</p>
        </div>
        <div className="col-md-4">
          {" "}
          <i className="fa fa-phone fa-2x" />
          <p> +1 800 123 1234</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 centered">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
          <form id="contact" method="post" className="form" role="form">
            <div className="row">
              <div className="col-xs-6 col-md-6 form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required=""
                />
              </div>
              <div className="col-xs-6 col-md-6 form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required=""
                />
              </div>
            </div>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              defaultValue={""}
            />
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <button className="btn btn btn-lg" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {/* form */}
        </div>
      </div>
      {/* row */}
    </div>
  </div>
  {/* container */}
  <div id="footerwrap">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {" "}
          <span className="copyright">
            Copyright © 2015 Ascend. Design by{" "}
            <a href="http://www.templategarden.com" rel="nofollow">
              TemplateGarden
            </a>
          </span>{" "}
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript
    ================================================== */}
  {/* Placed at the end of the document so the pages load faster */}
</>

  )
}

export default Solarshop