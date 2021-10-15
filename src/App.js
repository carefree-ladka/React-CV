import React from "react";

/*left sidebar  */
import Header from "./Header";
import Summary from "./Summary";
import Work from "./Work";
import Hobbies from "./Hobbies";
import Languages from "./Languages";

/*right sidebar  */
import Social from "./Social";
import Links from "./Links";
import Skills from "./Skills";
import Education from "./Education";
/* CSS */
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="left__sidebar">
          <Summary />
          <Work />
          <Hobbies />
          <Languages />
        </div>
        <div className="right__sidebar">
          <Social />
          <Links />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
}
