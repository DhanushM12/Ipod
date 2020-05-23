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
  //method for the main menu of ipod
  mainMenu = () => {
    let allScreens = document.getElementsByClassName("show");
    let currentScreen = "";

    for (currentScreen of allScreens) {
      if (currentScreen.style.visibilty === "visible") {
        break;
      }
    }
    currentScreen.style.visibilty = "hidden";
    currentScreen.style.height = "0";
    currentScreen.style.width = "0";

    let home = document.getElementById("display");
    home.style.visibilty = "visible";
    home.style.height = "50%";
    home.style.width = "95%";
    home.style.borderTopLeftRadius = "5%";
    home.style.borderTopRightRadius = "5%";
    home.style.marginTop = "1%";
  };
  render() {}
}

export default Ipod;
