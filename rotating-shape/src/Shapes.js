const SHAPES = [
  {
    name: "T",
    color: "#f0a",
    shape: [
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ],
  },
  {
    name: "L",
    color: "#fa0",
    shape: [
      [true, false, false],
      [true, true, true],
      [false, false, false],
    ],
  },
  {
    name: "J",
    color: "#00f",
    shape: [
      [false, false, true],
      [true, true, true],
      [false, false, false],
    ],
  },
  {
    name: "O",
    color: "#ff0",
    shape: [
      [true, true],
      [true, true],
    ],
  },
  {
    name: "S",
    color: "#0f0",
    shape: [
      [false, true, true],
      [true, true, false],
      [false, false, false],
    ],
  },
  {
    name: "Z",
    color: "#f00",
    shape: [
      [true, true, false],
      [false, true, true],
      [false, false, false],
    ],
  },
  {
    name: "I",
    color: "#0ff",
    shape: [
      [false, false, false, false],
      [true, true, true, true],
      [false, false, false, false],
      [false, false, false, false],
    ],
  },
];

export function getRandomShape() {
  const index = Math.floor(Math.random() * SHAPES.length);
  return SHAPES[index];
}
