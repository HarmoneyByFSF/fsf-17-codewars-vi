import "../style/App.css";
import "../style/general.css";
import "../style/bootstrap.min.css";
import prt from "../img/portfolio-1.jpg";
import coin from "../img/coin.webp";
import logo from "../img/unnamed-removebg-preview.png";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      {/* <div
        container-fluid
        bg-primary
        text-light
        footer
        wow
        fadeIn
        data-wow-delay="0.1s"
      >
        <div class="container-xxl position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="#" class="navbar-brand p-0 d-flex align-items-center">
              <img src={logo} alt="Logo" style={{ paddingRight: "30px" }} />
              <h1 class="m-0">DigiExpense</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav mx-auto py-0"></div>
              <div class="navbar-nav ms-auto align-items-center">
                <a class="nav-item nav-link">
                  <img
                    src={coin}
                    alt="Profile Icon"
                    class="rounded-circle profile-icon"
                  />
                </a>
                <span class="nav-item nav-link">100</span>
                <a href="#" class="nav-item nav-link">
                  <img
                    src={prt}
                    alt="Profile Icon"
                    class="rounded-circle profile-icon"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
      <div
        style={{
          backgroundColor: "#F6F6F6",
          width: "100%",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
