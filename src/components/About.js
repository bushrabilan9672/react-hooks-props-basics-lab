// About.js
import React from "react";
import Links from "./Links";

function About(props) {
  // Extract props
  const { bio, github, linkedin } = props;
  
  // Ensure bio is a string and trim any whitespace
  const bioText = bio && typeof bio === "string" ? bio.trim() : "";
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioText && <p>{bioText}</p>}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;