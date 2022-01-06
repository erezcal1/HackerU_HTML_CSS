
let rand = Math.floor(Math.random() * 3);
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let elem = elems[rand];
elem.style.backgroundColor = `rgb(${r},${g},${b})`;