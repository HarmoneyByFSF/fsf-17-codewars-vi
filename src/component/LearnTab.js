import React, { useState } from "react";
import "../style/LearnTab.css";

import Investment from "./Investment";
import Course from "./Course";

const LearnTab = () => {
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
      </div>
    </div>
  );
};

export default LearnTab;
