import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.3729, lng: -94.208 },
      zoom: 12
    });
    window.mapObject = map;
  }

  loadScript() {
    let scriptEl = this.createMapScript();
    let scriptsOnPage = document.getElementsByTagName("script");
    let script = scriptsOnPage[0];
    console.log(scriptsOnPage);
    console.log(script.parentNode);
    script.parentNode.insertBefore(scriptEl, script);
    window.initMap = this.initMap;
  }

  createMapScript() {
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyANGV56zbtmOCV18Jc86m9oBoNQHB4iyKg";
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }
  render() {
    this.loadScript();
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
