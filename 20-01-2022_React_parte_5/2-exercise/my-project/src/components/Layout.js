import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <Link to="/" class="nav-link active text-white">
            HOME
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/blog" class="nav-link active text-white">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link active text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <Outlet />
      <br />

      {/* FOOTER */}
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3 bg-dark">
          2022 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            Silabuz
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
