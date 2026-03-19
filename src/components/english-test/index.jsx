import React from "react";
import VoiceArea from "./voice-test";
// import { Header } from '../../layout';

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* <Header no_top_bar={true} /> */}
        <VoiceArea />
      </div>
    </div>
  );
};

export default index;
