import React from "react";
import InputModal from "./InputModal";
import SuccessModal from "./SuccessModal";
import video from "../img/Group 88.png";
import "../style/Course.css";
import insurance from "../img/insurance.png";
import investing from "../img/investing.png";

const Course = () => {
  function openPopup(videoLink) {
    var popup = document.getElementById("popup");
    var videoFrame = document.getElementById("video-frame");
    videoFrame.src = getEmbedUrl(videoLink);
    popup.classList.add("active");
  }

  function closePopup() {
    var popup = document.getElementById("popup");
    var videoFrame = document.getElementById("video-frame");
    videoFrame.src = "";
    popup.classList.remove("active");
  }

  function getEmbedUrl(videoLink) {
    var videoId = extractVideoId(videoLink);
    if (videoId) {
      return "https://www.youtube.com/embed/" + videoId;
    }
    return "";
  }

  function extractVideoId(videoLink) {
    var regex =
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
    var match = videoLink.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  return (
    <div className="scrollable-container-learn">
      {/* <InputModal />
      <SuccessModal /> */}

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ paddingBottom: "10px" }}>
          <div
            class="learnmore-container"
            style={{ height: "200px", backgroundColor: "#F985AF" }}
          >
            <div class="learnmore-price">Free</div>

            <img
              className="learnmore-image"
              src={insurance}
              alt="Expense Image"
            />

            <div class="learnmore-title">What is</div>

            <div class="learnmore-title">Insurance?</div>
          </div>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <div
            class="learnmore-container"
            style={{ height: "200px", backgroundColor: "#F5F2FF" }}
          >
            <div class="learnmore-price">25 tokens</div>

            <img
              className="learnmore-image"
              src={investing}
              alt="Expense Image"
            />

            <p></p>
            <div class="learnmore-title" style={{ color: "#535353" }}>
              Investing in
            </div>

            <div class="learnmore-title" style={{ color: "#535353" }}>
              Stock Market
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <div class="container">
          <img
            className="expense-image"
            style={{ height: "60px", width: "60px" }}
            src={video}
            alt="Expense Image"
            onClick={() => openPopup("https://youtu.be/SS-0dXz98Xo")}
          />
          <div class="text-container" style={{ paddingLeft: "30px" }}>
            <h2 class="title">
              FSC Reflexes Ep 1 - Financial Education Mauritius
            </h2>
            <p class="subtitle">Planning your expenses</p>
          </div>
        </div> */}

        <div class="container">
          <img
            className="expense-image"
            style={{ height: "60px", width: "60px" }}
            src={video}
            alt="Expense Image"
            // onclick="openPopup('https://youtu.be/SS-0dXz98Xo')"
            onClick={() => {
              // window.location.replace("https://youtu.be/SS-0dXz98Xo");
              window.location.href = "https://youtu.be/SS-0dXz98Xo";
            }}
            href=""
          />
          <div class="text-container" style={{ paddingLeft: "30px" }}>
            <h2 class="title">
              FSC Reflexes Ep 1 - Financial Education Mauritius
            </h2>
            <p class="subtitle">Balancing life and work</p>
          </div>
        </div>

        <div class="container">
          <img
            className="expense-image"
            style={{ height: "60px", width: "60px" }}
            src={video}
            alt="Expense Image"
            onclick="openPopup('https://youtu.be/SS-0dXz98Xo')"
          />
          <div class="text-container" style={{ paddingLeft: "30px" }}>
            <h2 class="title">
              FSC Reflexes Ep 2 - Financial Education Mauritius
            </h2>
            <p class="subtitle">Pension Scheme</p>
          </div>
        </div>

        <div class="container">
          <img
            className="expense-image"
            style={{ height: "60px", width: "60px" }}
            src={video}
            alt="Expense Image"
            onclick="openPopup('https://youtu.be/SS-0dXz98Xo')"
          />
          <div class="text-container" style={{ paddingLeft: "30px" }}>
            <h2 class="title">
              FSC Reflexes Ep 3 - Financial Education Mauritius
            </h2>
            <p class="subtitle">Investment and interest</p>
          </div>
        </div>

        {/* <div id="popup" class="popup" onclick="closePopup()">
          <div class="popup-content" onclick="event.stopPropagation()">
            <iframe id="video-frame" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
            <span class="close-button" onclick="closePopup()">Close</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Course;
