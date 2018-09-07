import React, { Component } from "react";

export default function Dependency({ dependency, ostype, serverUrl }) {
  return (
    <div>
      <a href={`http://${serverUrl}:/${dependency.name}/${dependency[ostype]}`}>{dependency.name}</a>
    </div>
  );
}
