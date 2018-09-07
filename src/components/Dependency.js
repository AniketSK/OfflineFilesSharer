import React, { Component } from "react";

export default function Dependency({ dependency, ostype }) {
  return <div>
  Hi I'm a dependency called {dependency.name}
  Get {dependency[ostype]}
  </div>;
}
