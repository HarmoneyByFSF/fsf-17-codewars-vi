import React, { useState } from "react";
import "../style/LearnTab.css";
import video from "../img/Group 88.png";
import Investment from "./Investment";
import Course from "./Course";
import BuyStock from "./Modal/BuyStock";

const LearnTab = () => {
  const [openBuyModal, setOpenBuyModal] = useState(false);
  // function openPopup(videoLink) {
  //   var popup = document.getElementById('popup');
  //   var videoFrame = document.getElementById('video-frame');
  //   videoFrame.src = getEmbedUrl(videoLink);
  //   popup.classList.add('active');
  // }

  // function closePopup() {
  //   var popup = document.getElementById('popup');
  //   var videoFrame = document.getElementById('video-frame');
  //   videoFrame.src = '';
  //   popup.classList.remove('active');
  // }

  // function getEmbedUrl(videoLink) {
  //   var videoId = extractVideoId(videoLink);
  //   if (videoId) {
  //     return 'https://www.youtube.com/embed/' + videoId;
  //   }
  //   return '';
  // }

  // function extractVideoId(videoLink) {
  //   var regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
  //   var match = videoLink.match(regex);
  //   if (match) {
  //     return match[1];
  //   } else {
  //     return null;
  //   }
  // }
  return (
    <div>
      <BuyStock visible={openBuyModal} setVisible={setOpenBuyModal} />
      <div class="wrapper">
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "20px",
            marginBottom: "-20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div style={{ fontSize: "22px", color: "black" }}>Your</div>
            <div
              style={{ fontSize: "22px", color: "black", fontWeight: "600" }}
            >
              Skills
            </div>
          </div>

          <div style={{ paddingTop: "10px" }}>
            <div class="loading-bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
        <div class="tabss">
          <div class="tab">
            <input
              type="radio"
              name="css-tabss"
              id="tab-1"
              checked
              class="tab-switch"
            />
            <label for="tab-1" class="tab-label">
              Course
            </label>
            <div class="tab-content">
              <Course />
            </div>
          </div>
          <div class="tab">
            <input
              type="radio"
              name="css-tabss"
              id="tab-2"
              class="tab-switch"
            />
            <label for="tab-2" class="tab-label">
              Investment Simulation
            </label>
            <div class="tab-content">
              <Investment setVisible={setOpenBuyModal} />
            </div>
          </div>
          {/* <div class="tab">
            <input
              type="radio"
              name="css-tabss"
              id="tab-3"
              class="tab-switch"
            />
            <label for="tab-3" class="tab-label">
              Tab Three
            </label>
            <div class="tab-content">
              When I left Mr. Bates, I went down to my father: where, by the
              assistance of him and my uncle John, and some other relations, I
              got forty pounds, and a promise of thirty pounds a year to
              maintain me at Leyden: there I studied physic two years and seven
              months, knowing it would be useful in long voyages.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LearnTab;
