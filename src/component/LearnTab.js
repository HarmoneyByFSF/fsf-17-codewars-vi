import React, { useState } from "react";
import "../style/LearnTab.css";
import video from "../img/Group 88.png";
import Investment from "./Investment";
import Course from "./Course";

const LearnTab = () => {
  function openPopup(videoLink) {
    var popup = document.getElementById('popup');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = getEmbedUrl(videoLink);
    popup.classList.add('active');
}

function closePopup() {
    var popup = document.getElementById('popup');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = '';
    popup.classList.remove('active');
}

function getEmbedUrl(videoLink) {
    var videoId = extractVideoId(videoLink);
    if (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
    }
    return '';
}

function extractVideoId(videoLink) {
    var regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
    var match = videoLink.match(regex);
    if (match) {
        return match[1];
    } else {
        return null;
    }
}
  return (
    <div>
      <div class="wrapper">
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "20px",
            marginBottom: "-20px",
          }}
        >
          Learn
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
              <Investment />
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
        <div class="container">
        <img className="expense-image" src={video} alt="Expense Image" onClick={() => openPopup('https://youtu.be/SS-0dXz98Xo')} />
            <div class="text-container">
              <h2 class="title">FSC Reflexes Ep 1 - Financial Education Mauritius</h2>
              <p class="subtitle">Planning your expenses</p>
            </div>
        </div>
        <div class="container">
        <img className="expense-image" src={video} alt="Expense Image" onclick="openPopup('https://youtu.be/SS-0dXz98Xo')" />
            <div class="text-container">
              <h2 class="title">FSC Reflexes Ep 2 - Financial Education Mauritius</h2>
              <p class="subtitle">Balancing life and work</p>
            </div>
        </div>
        <div class="container">
          <img className="expense-image" src={video} alt="Expense Image" onclick="openPopup('https://youtu.be/SS-0dXz98Xo')" />
          <div class="text-container">
            <h2 class="title">FSC Reflexes Ep 3 - Financial Education Mauritius</h2>
            <p class="subtitle">Pension Scheme</p>
          </div>
        </div>
        <div class="container">
        <img className="expense-image" src={video} alt="Expense Image" onclick="openPopup('https://youtu.be/SS-0dXz98Xo')" />
            <div class="text-container">
              <h2 class="title">FSC Reflexes Ep 4 - Financial Education Mauritius</h2>
              <p class="subtitle">Investment and interest</p>
            </div>
        </div>

        <div id="popup" class="popup" onclick="closePopup()">
          <div class="popup-content" onclick="event.stopPropagation()">
            <iframe id="video-frame" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
            <span class="close-button" onclick="closePopup()">Close</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LearnTab;
