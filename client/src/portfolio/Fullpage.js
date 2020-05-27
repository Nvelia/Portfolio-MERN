import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Homepage from "./Homepage";
import WorkHomepage from "./WorkHomepage";
import SkillHomepage from "./skillpage/SkillHomepage";

const Fullpage = ({ works }) => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={800}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Homepage fullpageApi={fullpageApi}></Homepage>

          <WorkHomepage works={works} fullpageApi={fullpageApi}></WorkHomepage>
          <SkillHomepage fullpageApi={fullpageApi} />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
