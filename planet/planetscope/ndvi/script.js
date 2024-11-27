//VERSION=3
// ndvi

function setup() {
  return {
    input: ["NIR", "red", "dataMask"],
    output: {
      bands: 4,
    },
  };
}

const colorRamp = [
  [0, 0xfffdea],
  [0.00390625, 0xfefce7],
  [0.0078125, 0xfefbe5],
  [0.01171875, 0xfdfae3],
  [0.015625, 0xfcf9e0],
  [0.01953125, 0xfbf8de],
  [0.0234375, 0xfaf7dc],
  [0.02734375, 0xfaf6d9],
  [0.03125, 0xf9f5d7],
  [0.03515625, 0xf8f4d5],
  [0.0390625, 0xf7f3d2],
  [0.04296875, 0xf6f2d0],
  [0.046875, 0xf6f1ce],
  [0.05078125, 0xf5f0cb],
  [0.0546875, 0xf4efc9],
  [0.05859375, 0xf3eec7],
  [0.0625, 0xf3edc4],
  [0.06640625, 0xf2ecc2],
  [0.0703125, 0xf1ebbf],
  [0.07421875, 0xf0eabd],
  [0.078125, 0xf0e9ba],
  [0.08203125, 0xefe8b8],
  [0.0859375, 0xeee7b6],
  [0.08984375, 0xeee6b3],
  [0.09375, 0xede4b1],
  [0.09765625, 0xece3ae],
  [0.1015625, 0xebe2ac],
  [0.10546875, 0xebe1a9],
  [0.109375, 0xeae0a7],
  [0.11328125, 0xe9dfa4],
  [0.1171875, 0xe9dea2],
  [0.12109375, 0xe8dd9f],
  [0.125, 0xe7dc9c],
  [0.12890625, 0xe6db9a],
  [0.1328125, 0xe6da97],
  [0.13671875, 0xe5d995],
  [0.140625, 0xe4d892],
  [0.14453125, 0xe4d78f],
  [0.1484375, 0xe3d68d],
  [0.15234375, 0xe2d58a],
  [0.15625, 0xe2d487],
  [0.16015625, 0xe1d384],
  [0.1640625, 0xe0d281],
  [0.16796875, 0xe0d17f],
  [0.171875, 0xdfd07d],
  [0.17578125, 0xdecf7a],
  [0.1796875, 0xdece77],
  [0.18359375, 0xddcd74],
  [0.1875, 0xdccc71],
  [0.19140625, 0xdccb6e],
  [0.1953125, 0xdbca6a],
  [0.19921875, 0xdac967],
  [0.203125, 0xdac864],
  [0.20703125, 0xd9c660],
  [0.2109375, 0xd8c55d],
  [0.21484375, 0xd8c459],
  [0.21875, 0xd8c458],
  [0.22265625, 0xd6c456],
  [0.2265625, 0xd5c354],
  [0.23046875, 0xd3c252],
  [0.234375, 0xd2c250],
  [0.23828125, 0xd0c14e],
  [0.2421875, 0xcec04c],
  [0.24609375, 0xcdc04a],
  [0.25, 0xccbf48],
  [0.25390625, 0xcabe46],
  [0.2578125, 0xc9be44],
  [0.26171875, 0xc7bd41],
  [0.265625, 0xc5bc3f],
  [0.26953125, 0xc4bb3d],
  [0.2734375, 0xc2bb3a],
  [0.27734375, 0xc0ba38],
  [0.28125, 0xbfb935],
  [0.28515625, 0xbdb932],
  [0.2890625, 0xbbb82f],
  [0.29296875, 0xbab72d],
  [0.296875, 0xb8b729],
  [0.30078125, 0xb6b626],
  [0.3046875, 0xb5b523],
  [0.30859375, 0xb3b51f],
  [0.3125, 0xb1b41b],
  [0.31640625, 0xb0b317],
  [0.3203125, 0xaeb311],
  [0.32421875, 0xacb20a],
  [0.328125, 0xaab103],
  [0.33203125, 0xa9b100],
  [0.3359375, 0xa7b000],
  [0.33984375, 0xa5af00],
  [0.34375, 0xa3af00],
  [0.34765625, 0xa2ae00],
  [0.3515625, 0xa0ad00],
  [0.35546875, 0x9ead00],
  [0.359375, 0x9cac00],
  [0.36328125, 0x9bac00],
  [0.3671875, 0x99ab00],
  [0.37109375, 0x97aa00],
  [0.375, 0x95a900],
  [0.37890625, 0x93a900],
  [0.3828125, 0x92a800],
  [0.38671875, 0x90a700],
  [0.390625, 0x8ea700],
  [0.39453125, 0x8ca600],
  [0.3984375, 0x8aa500],
  [0.40234375, 0x89a400],
  [0.40625, 0x87a400],
  [0.41015625, 0x85a300],
  [0.4140625, 0x83a200],
  [0.41796875, 0x82a200],
  [0.421875, 0x80a100],
  [0.42578125, 0x7ea000],
  [0.4296875, 0x7c9f00],
  [0.43359375, 0x7a9f00],
  [0.4375, 0x799e00],
  [0.44140625, 0x779d00],
  [0.4453125, 0x759c00],
  [0.44921875, 0x739c00],
  [0.453125, 0x729b00],
  [0.45703125, 0x709a00],
  [0.4609375, 0x6e9900],
  [0.46484375, 0x6c9900],
  [0.46875, 0x6a9800],
  [0.47265625, 0x699700],
  [0.4765625, 0x679600],
  [0.48046875, 0x659600],
  [0.484375, 0x639500],
  [0.48828125, 0x619400],
  [0.4921875, 0x609300],
  [0.49609375, 0x5e9300],
  [0.5, 0x5c9300],
  [0.50390625, 0x5a9200],
  [0.5078125, 0x589100],
  [0.51171875, 0x579000],
  [0.515625, 0x558f00],
  [0.51953125, 0x538f01],
  [0.5234375, 0x518e03],
  [0.52734375, 0x4f8d05],
  [0.53125, 0x4d8c07],
  [0.53515625, 0x4b8c09],
  [0.5390625, 0x498b0b],
  [0.54296875, 0x478a0d],
  [0.546875, 0x45890f],
  [0.55078125, 0x438810],
  [0.5546875, 0x418812],
  [0.55859375, 0x3f8713],
  [0.5625, 0x3d8614],
  [0.56640625, 0x3b8516],
  [0.5703125, 0x398517],
  [0.57421875, 0x378418],
  [0.578125, 0x358319],
  [0.58203125, 0x33821a],
  [0.5859375, 0x31811b],
  [0.58984375, 0x2e811c],
  [0.59375, 0x2c801d],
  [0.59765625, 0x2a7f1d],
  [0.6015625, 0x277e1e],
  [0.60546875, 0x257d1f],
  [0.609375, 0x227d20],
  [0.61328125, 0x1f7c20],
  [0.6171875, 0x1c7b21],
  [0.62109375, 0x197a22],
  [0.625, 0x157922],
  [0.62890625, 0x117923],
  [0.6328125, 0x0c7824],
  [0.63671875, 0x067724],
  [0.640625, 0x027625],
  [0.64453125, 0x007525],
  [0.6484375, 0x007526],
  [0.65234375, 0x007426],
  [0.65625, 0x007327],
  [0.66015625, 0x007227],
  [0.6640625, 0x007128],
  [0.66796875, 0x007028],
  [0.671875, 0x007029],
  [0.67578125, 0x006f29],
  [0.6796875, 0x006e29],
  [0.68359375, 0x006d2a],
  [0.6875, 0x006c2a],
  [0.69140625, 0x006c2a],
  [0.6953125, 0x006b2b],
  [0.69921875, 0x006a2b],
  [0.703125, 0x00692b],
  [0.70703125, 0x00682c],
  [0.7109375, 0x00672c],
  [0.71484375, 0x00672c],
  [0.71875, 0x00662c],
  [0.72265625, 0x00652d],
  [0.7265625, 0x00642d],
  [0.73046875, 0x00632d],
  [0.734375, 0x00622d],
  [0.73828125, 0x00622d],
  [0.7421875, 0x00612e],
  [0.74609375, 0x00602e],
  [0.75, 0x005f2e],
  [0.75390625, 0x005e2e],
  [0.7578125, 0x005d2e],
  [0.76171875, 0x005d2e],
  [0.765625, 0x005c2e],
  [0.76953125, 0x005b2e],
  [0.7734375, 0x005a2e],
  [0.77734375, 0x00592f],
  [0.78125, 0x00582f],
  [0.78515625, 0x00582f],
  [0.7890625, 0x00572f],
  [0.79296875, 0x00562f],
  [0.796875, 0x00552f],
  [0.80078125, 0x00542f],
  [0.8046875, 0x00532f],
  [0.80859375, 0x00532f],
  [0.8125, 0x00522f],
  [0.81640625, 0x00512f],
  [0.8203125, 0x00502f],
  [0.82421875, 0x004f2f],
  [0.828125, 0x004e2e],
  [0.83203125, 0x004d2e],
  [0.8359375, 0x004d2e],
  [0.83984375, 0x004c2e],
  [0.84375, 0x004b2e],
  [0.84765625, 0x004a2e],
  [0.8515625, 0x00492e],
  [0.85546875, 0x00482e],
  [0.859375, 0x00472e],
  [0.86328125, 0x00472e],
  [0.8671875, 0x00462d],
  [0.87109375, 0x00452d],
  [0.875, 0x00442d],
  [0.87890625, 0x00432d],
  [0.8828125, 0x00422d],
  [0.88671875, 0x00412c],
  [0.890625, 0x00412c],
  [0.89453125, 0x00402c],
  [0.8984375, 0x003f2c],
  [0.90234375, 0x003e2c],
  [0.90625, 0x003d2b],
  [0.91015625, 0x003c2b],
  [0.9140625, 0x003b2b],
  [0.91796875, 0x003a2b],
  [0.921875, 0x003a2a],
  [0.92578125, 0x00392a],
  [0.9296875, 0x00382a],
  [0.93359375, 0x003729],
  [0.9375, 0x003629],
  [0.94140625, 0x003529],
  [0.9453125, 0x003428],
  [0.94921875, 0x003328],
  [0.953125, 0x003228],
  [0.95703125, 0x003127],
  [0.9609375, 0x003027],
  [0.96484375, 0x002f26],
  [0.96875, 0x002e26],
  [0.97265625, 0x002d25],
  [0.9765625, 0x002c25],
  [0.98046875, 0x002b24],
  [0.984375, 0x002a24],
  [0.98828125, 0x002923],
  [0.9921875, 0x002823],
  [0.99609375, 0x002622],
  [1, 0x072421],
];

let viz = new ColorRampVisualizer(colorRamp);

function evaluatePixel(sample) {
  let ndvi = index(sample.NIR, sample.red);
  const minIndex = 0;
  const maxIndex = 1;
  let visVal = null;

  if (ndvi > maxIndex || ndvi < minIndex) {
    visVal = [0, 0, 0, 0];
  } else {
    visVal = [...viz.process(ndvi), sample.dataMask];
  }

  return visVal;
}
