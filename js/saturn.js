import * as THREE from "./../../node_modules/three/build/three.module.js";
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#saturn'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,1,16,100)
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe:true});
const torus = new THREE.Mesh(geometry,material);
scene.add(torus)

const geometry2 = new THREE.SphereGeometry( 7, 16, 8 ); 
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true } ); 
const sphere = new THREE.Mesh( geometry2, material2 ); scene.add( sphere );
scene.add(sphere)



function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x+=0.01;
  torus.rotation.y+=0.005;
  torus.rotation.z+=0.01;

  sphere.rotation.x+=0.01;
  sphere.rotation.y+=0.005;
  sphere.rotation.z+=0.01;
  renderer.render(scene,camera);
}
animate()
console.log("hello")