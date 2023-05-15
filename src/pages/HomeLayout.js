import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
      <>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary p-3">
                <a className="navbar-brand" href='/'>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href='/contact'>Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">Profile</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        </div>
      </div> */}

      <header>
        <div className="container">
          <div className="row">
            <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/blog'>Blog</NavLink>
              <NavLink to='/profile'>Profile</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Outlet/>
      </>
    </div>
  )
}

export default HomeLayout
