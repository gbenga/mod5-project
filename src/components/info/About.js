import React from "react";
import Pulse from "react-reveal/Pulse";

export default function AboutComponent() {
  return (
    <div>
      <Pulse>
        <strong>
          This is a platform that makes it easier to get over-the-counter
          medication straight to your door.
        </strong>
      </Pulse>
      <div>
        {" "}
        Made by
        <strong>
          <a href={"https://github.com/gbenga"}>Gbenga</a>
        </strong>
      </div>
      <a href={"https://github.com/gbenga/get-it-otc-frontend"}>Frontend</a>
      <a href={"https://github.com/gbenga/get-it-otc-backend"}>Backend</a>
    </div>
  );
}
