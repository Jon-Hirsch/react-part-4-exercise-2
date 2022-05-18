import { render } from "@testing-library/react";
import React from "react";

import ShapeList from "../src/components/ShapeList";

describe("ShapeList", function () {
  let shapes;

  beforeEach(function () {
    shapes = [
      { shape: "square", color: "blue", id: "1" },
      { shape: "diamond", color: "red", id: "2" },
      { shape: "circle", color: "green", id: "3" },
    ];
  });

  test("should contain a blue square", function () {
    const { container } = render(<ShapeList shapes={shapes} />);
    expect(container.querySelectorAll(".blue.square").length).toEqual(1);
  });

  test("should contain contain a red diamond", function () {
    const { container } = render(<ShapeList shapes={shapes} />);
    expect(container.querySelectorAll(".red.diamond").length).toEqual(1);
  });

  test("should contain a green circle", function () {
    const { container } = render(<ShapeList shapes={shapes} />);
    expect(container.querySelectorAll(".green.circle").length).toEqual(1);
  });
});
