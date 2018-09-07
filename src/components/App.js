import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "../config";
import Dependency from "./Dependency";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{config.title}</h1>
        </header>
        <div className="App-intro">
          {config.dependencies.map(d => (
            <Dependency key={d.name} dependency={d} ostype={"linux64"} serverUrl={config.serverUrl} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
