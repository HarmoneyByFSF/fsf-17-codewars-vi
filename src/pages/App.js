import "../style/App.css";
import "../style/general.css";
import "../style/bootstrap.min.css";
import prt from "../img/portfolio-1.jpg";
import coin from "../img/coin.webp";
import logo from "../img/unnamed-removebg-preview.png";
import Dashboard from "./Dashboard";

function App() {
  const containerStyle = {
    width: "1440px",
    height: "130px",
    position: "relative",
    background: "#F6F6F6",
  };

  const greetingStyle = {
    width: "254.48px",
    height: "84.36px",
    left: "102.07px",
    top: "38.89px",
    position: "absolute",
    color: "#898989",
    fontSize: "46px",
    fontFamily: "Poppins",
    fontWeight: "500",
    letterSpacing: "3.68px",
    wordWrap: "break-word",
  };

  const xpContainerStyle = {
    left: "1014.82px",
    top: "40.57px",
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "41px",
    display: "inline-flex",
  };

  const xpBadgeStyle = {
    width: "109.12px",
    height: "44.73px",
    position: "relative",
  };

  const xpBackgroundStyle = {
    width: "109.12px",
    height: "44.73px",
    left: "0px",
    top: "0px",
    position: "absolute",
    background: "#8D64FE",
    borderRadius: "54px",
  };

  const xpTextStyle = {
    left: "14.52px",
    top: "6.28px",
    position: "absolute",
    color: "white",
    fontSize: "22px",
    fontFamily: "Poppins",
    fontWeight: "600",
    letterSpacing: "1.76px",
    wordWrap: "break-word",
  };

  const levelContainerStyle = {
    width: "120.90px",
    height: "53.49px",
    position: "relative",
  };

  const levelBackgroundStyle = {
    width: "106.36px",
    height: "44.50px",
    left: "14.55px",
    top: "4.45px",
    position: "absolute",
    background: "#F985AF",
    boxShadow: "0px 4px 11px #F985AF",
    borderRadius: "50px",
  };

  const levelTextStyle = {
    width: "33.78px",
    height: "32.18px",
    left: "70.60px",
    top: "10.73px",
    position: "absolute",
    color: "white",
    fontSize: "22px",
    fontFamily: "Poppins",
    fontWeight: "600",
    letterSpacing: "1.76px",
    wordWrap: "break-word",
  };

  const dollarImageStyle = {
    width: "53.49px",
    height: "53.49px",
    left: "0px",
    top: "0px",
    position: "absolute",
  };

  const profileImageStyle = {
    width: "68.36px",
    height: "68.36px",
    borderRadius: "50px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={greetingStyle}>Hi, Rabill</div>
        <div style={xpContainerStyle}>
          <div style={xpBadgeStyle}>
            <div style={xpBackgroundStyle}></div>
            <div style={xpTextStyle}>340 XP</div>
          </div>
          <div style={levelContainerStyle}>
            <div style={levelBackgroundStyle}></div>
            <div style={levelTextStyle}>34</div>
            <img style={dollarImageStyle} src="img/dollar 1.png" alt="dollar" />
          </div>
          <img
            style={profileImageStyle}
            src="img/testimonial-1.jpg"
            alt="profile"
          />
        </div>
      </div>
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
