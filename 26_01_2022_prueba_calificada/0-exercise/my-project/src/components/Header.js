import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container-fluid">
        <Link to="/login" class="nav-link active text-white">
          Login
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/sign-up" class="nav-link active text-white">
                Sing-up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
