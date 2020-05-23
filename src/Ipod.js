import React from "react";
import "./index.css";
import ZingTouch from "zingtouch";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ["Settings", "Games", "Music", "Cover-Flow"],
    };
  }
  //method for handling the scroll
  handleScroll = () => {
    let angle = 0;
    const myElement = document.getElementById("menu");
    const region = new ZingTouch.Region(myElement);
    region.bind(myElement, "rotate", function (e) {
      angle += e.detail.distanceFromLast;

      if (Math.abs(angle) > 0 && Math.abs(angle) < 15) {
        let element = document.getElementById("Settings");
        element.style.background = "blue";
        element.style.color = "white";
      }
      if (Math.abs(angle) > 15 && Math.abs(angle) < 30) {
        let element = document.getElementById("Games");
        element.style.background = "blue";
        element.style.color = "white";
      }
      if (Math.abs(angle) > 30 && Math.abs(angle) < 45) {
        let element = document.getElementById("Music");
        element.style.background = "blue";
        element.style.color = "white";
      }
      if (Math.abs(angle) > 45 && Math.abs(angle) < 60) {
        let element = document.getElementById("Cover-Flow");
        element.style.background = "blue";
        element.style.color = "white";
      }
    });
  };
  render() {}
}

export default Ipod;
