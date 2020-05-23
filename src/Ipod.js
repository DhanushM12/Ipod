import React from "react";
import "./index.css";
import ZingTouch from "zingtouch";
import "../node_modules/font-awesome/css/font-awesome.min.css";

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

  optionClick = () => {
    let total = document.getElementsByClassName("display-items");
    let t;
    for (t of total) {
      if (t.style.backgroundColor === "lightblue") {
        break;
      }
    }
  };

  render() {
    const items = this.state.display;
    return (
      <div className="main">
        <div className="active-screen" id="display">
          {items.map((item, index) => (
            <div className="display-items" id={item} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div id="Coverflow-display" className="show"></div>
        <div id="Settings-display" className="show"></div>
        <div id="Games-display" className="show"></div>
        <div id="Music-display" className="show"></div>
        <div id="menu" className="controls" onClick={this.handleScroll}>
          <button
            id="menu-button"
            className="buttons"
            onClick={this.homeScreen}
          >
            Menu
          </button>
          <i className="fa fa-forward"></i>
          {/* backward icon */}
          <i className="fa fa-backward"></i>
          {/* play icon */}
          <i className="fa fa-play"></i>
          {/* pause icon */}
          <i className="fa fa-pause"></i>

          <div className="Outer">
            <button className="Inner" onClick={this.optionClick}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ipod;
