import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshBasicMaterial,
  Color,
  PointLight
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//  ______  __   ___  ______   _____  _____
// /_   _/ /  /_/  / /  -  /  /  __/ /  __/
//  / /   /  __   / /    <'  /  _/  /  _/  
// /_/   /__/ /__/ /__/|__| /____/ /____/
const scene = new Scene();
scene.background = new Color(0, 0, 1);

const camera = new PerspectiveCamera(
  11.5,
  window.innerWidth / 300,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new WebGLRenderer(); //{antialias:true}
renderer.setSize(window.innerWidth, 300);
renderer.setPixelRatio(.3);
// document.body.appendChild(renderer.domElement);
document.getElementById("animation").appendChild(renderer.domElement);

const material = new MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});

const light = new PointLight();
light.position.z = 5;
scene.add(light);


const loader = new GLTFLoader();
let strip;
loader.load(
  "src/lightStrip.glb",
  (gltf) => {
    scene.add(gltf.scene);
    strip = scene.children[1];
    strip.scale.x = 0.5;
    strip.scale.y = 0.5;
    strip.scale.z = 0.5;
    console.log(strip);
    //strip.children[1].material = material
    //strip.children[0].children[0].material = material
    //strip.children[0].children[4].material.color = new Color(1,1,1)
  },
  undefined,
  (error) => {
    console.error(error);
  }
);

function animate() {
  //before the next time a frame is drawn, the animate meathod will be run
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (strip) strip.rotation.y += 0.01;
}

//    _____  ____   ____  __ ___   _____ ______
//   /  __/ / _  | /  _/ /  v  /  /  __//_   _/
//  _\  \  / _/ / / /_  /    <.  /  _/   / /   
// /____/ |____/ |___/ /__/|__| /____/  /_/   

console.log("gonna connect to the johnsky john")
const socket = io.connect('http://raspberrypi.local:80')

const color1 = document.querySelector('#c1');
color1.addEventListener('input', () => {
    //console.log("color changed"+input.value);
    socket.emit("color1",color1.value);
});

const color2 = document.querySelector('#c2');
color2.addEventListener('input', () => {
    //console.log("color changed"+input.value);
    socket.emit("color2",color2.value);
}); 

animate();