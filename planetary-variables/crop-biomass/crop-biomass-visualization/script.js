//VERSION=3
function setup() {
  return {
    input: ["CB", "dataMask"],
    output: { bands: 4, sampleTYPE: "AUTO" },
  };
}


const bp_ramp = [
  [0, 0xfff7ea],
  [0.100, 0xf3e3c8],
  [0.200, 0xdad0a4],
  [0.300, 0xbdc082],
  [0.400, 0x99b160],
  [0.500, 0x6da242],
  [0.600, 0x2c952e],
  [0.7000, 0x008729],
  [0.800, 0x007932],
  [0.9000, 0x006640],
  [1.000, 0x005444],
];

const visualizer = new ColorRampVisualizer(bp_ramp);

let factor = 1 / 1000;
function evaluatePixel(sample) {
  let val = sample.CB * factor;
  let imgVals = visualizer.process(val);
  return [...imgVals, sample.dataMask]
}

