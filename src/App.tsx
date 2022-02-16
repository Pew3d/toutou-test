import { React, FunctionComponent, StatelessComponent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getLaunches, getMissions } from "./api/spaceX.api";
import MissionContainer from "./container/MissionsContainer";

const App: FunctionComponent = () => {
  return (
    <div className="container mx-auto">
      <MissionContainer />
    </div>
  );
};

export default App;
