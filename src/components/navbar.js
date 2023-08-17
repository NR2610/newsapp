import React, { Component } from "react";
import { Link } from "react-router-dom";

export class navbar extends Component {
  render(props) {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg  bg-black ">
          <div className="container-fluid ">
            <Link className="navbar-brand text-white" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-white" to="/About">
                    About
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Bussiness">
                    Bussiness
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/General">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Technology">
                    Technology
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
