import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import SmurfsList from "./SmurfsList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
