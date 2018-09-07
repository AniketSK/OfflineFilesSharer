import React, { Component } from "react";

export default function Dependency({ dependency, ostype }) {
  return (
    <div>
      <a href={`dependencies/${dependency[ostype]}`}>{dependency.name}</a>
    </div>
  );
}
