import React from "react";
import Pulse from "react-reveal/Pulse";

export default function AboutComponent() {
  return (
    <div>
      <Pulse>
        <strong>
          This app was built in order make it easier for immuno-compromised
          individuals to get over-the-counter medication straight to their door.
          Especially given that some people may be sheltering, and unable to
          visit the pharmacy themselves, I wished something like this existed.
        </strong>
      </Pulse>
      <div>
        {" "}
        Made by
        <strong>
          <a href={"https://github.com/gbenga"}>Gbenga</a>
        </strong>
      </div>
      <a href={"https://github.com/gbenga/get-it-otc-frontend"}>GitHub</a>
    </div>
  );
}
