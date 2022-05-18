import React from "react";
import ShapeList from "./ShapeList";

export default function App() {
  let shapes = [
    { shape: "square", color: "blue", id: "1" },
    { shape: "diamond", color: "red", id: "2" },
    { shape: "circle", color: "green", id: "3" },
  ];

  let moreShapes = [
    { shape: "diamond", color: "green", id: "4" },
    { shape: "circle", color: "blue", id: "5" },
    { shape: "square", color: "red", id: "6" },
  ];

  return (
    <div>
      <ShapeList shapes={shapes} />
      <ShapeList shapes={moreShapes} />
    </div>
  );
}
