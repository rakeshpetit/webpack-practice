import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

// const image = document.createElement("img");
// image.src = 'http://picsum.photos/300/300';
// document.body.appendChild(image);

let image = document.createElement("img");
image.src = small;
document.body.appendChild(image);

image = document.createElement("img");
image.src = big;
document.body.appendChild(image);