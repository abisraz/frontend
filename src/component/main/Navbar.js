import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid ">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height={15}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>


            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/AddEquipment">
                  <button type="button" className="btn btn-outline-light btn-square-md" data-mdb-ripple-color="dark">
                    +
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/BrowseEquipment">
                  <button type="button" className="btn btn-outline-secondry btn-square-md" data-mdb-ripple-color="dark">
                    BrowseEquipments
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Solarshop">
                  <button type="button" className="btn btn-outline-secondry btn-square-md" data-mdb-ripple-color="dark">
                    Shop
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/EquipmentDetails">
                  <button type="button" className="btn btn-outline-secondry btn-square-md" data-mdb-ripple-color="dark">
                    Detail
                  </button>
                </NavLink>
              </li>



            </ul>
          </div>




          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <ul className="d-flex align-items-center navbar-nav me-auto mb-2 mb-lg-0 ">
          {/* Icon */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/Login">
              <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark">Login</button>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/main/Signup">
              <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark">Signup</button>
            </NavLink>
          </li>

          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart" />
          </a>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              type="button"
              data-mdb-toggle="dropdown"

            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height={25}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>

            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a
                  className="dropdown-item" href="/Myprofile">
                  My profile
                </a>

              </li>
              <li>
                <a
                  className="dropdown-item" href="#">
                  Settings
                </a>

              </li>
              <li>
                <a
                  className="dropdown-item" href="#">
                  Logout
                </a>

              </li>
            </ul>
          </div>
        </ul>




        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar